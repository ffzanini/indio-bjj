import { createHash, randomUUID } from "crypto";

import { SITE_URL } from "@/constants/seo";

const GRAPH_VERSION = "v23.0";
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export type MetaContext = {
  eventId: string;
  eventSourceUrl?: string;
  fbp?: string;
  fbc?: string;
};

export type ConversionEvent = MetaContext & {
  eventName: "PageView" | "Lead";
  ip?: string;
  userAgent?: string;
  email?: string;
  phone?: string;
  name?: string;
};

export type ConversionResult = "sent" | "skipped" | "failed";

const sha256 = (value: string) =>
  createHash("sha256").update(value).digest("hex");

const normalizeName = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z]/g, "");

const hashPhone = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (!digits.startsWith("55")) digits = `55${digits}`;
  return sha256(digits);
};

export const getClientIp = (req: Request) => {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
};

const asRecord = (payload: unknown) => {
  if (!payload || typeof payload !== "object") return null;
  return payload as Record<string, unknown>;
};

export const sanitizeSourceUrl = (value: unknown) => {
  if (typeof value !== "string" || value.length < 8 || value.length > 500) {
    return undefined;
  }
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return undefined;
    return url.toString();
  } catch {
    return undefined;
  }
};

const sanitizeFbp = (value: unknown) => {
  if (typeof value !== "string") return undefined;
  if (!/^fb\.1\.\d{10,13}\.\d{1,20}$/.test(value)) return undefined;
  return value;
};

const sanitizeFbc = (value: unknown) => {
  if (typeof value !== "string") return undefined;
  if (value.length < 8 || value.length > 250) return undefined;
  if (!value.startsWith("fb.1.") || /[\s;]/.test(value)) return undefined;
  return value;
};

export const readMetaContext = (
  payload: unknown,
  options?: { requireEventId?: boolean },
): MetaContext | null => {
  const record = asRecord(payload);
  if (!record) return null;

  const rawId = typeof record.eventId === "string" ? record.eventId : "";
  if (options?.requireEventId && !UUID_RE.test(rawId)) return null;

  return {
    eventId: UUID_RE.test(rawId) ? rawId : randomUUID(),
    eventSourceUrl: sanitizeSourceUrl(record.eventSourceUrl),
    fbp: sanitizeFbp(record.fbp),
    fbc: sanitizeFbc(record.fbc),
  };
};

export async function sendConversionEvent(
  event: ConversionEvent,
): Promise<ConversionResult> {
  const pixelId =
    process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !/^\d{5,20}$/.test(pixelId) || !token) {
    console.error("[meta] Pixel or conversions token is missing");
    return "skipped";
  }

  const userData: Record<string, string | string[]> = {};
  if (event.email) userData.em = [sha256(event.email.trim().toLowerCase())];
  if (event.phone) userData.ph = [hashPhone(event.phone)];
  if (event.name) {
    const parts = event.name.trim().split(/\s+/).filter(Boolean);
    const first = normalizeName(parts[0] ?? "");
    const last = normalizeName(parts.slice(1).join(" "));
    if (first) userData.fn = [sha256(first)];
    if (last) userData.ln = [sha256(last)];
  }
  if (event.ip && event.ip !== "unknown") userData.client_ip_address = event.ip;
  if (event.userAgent) userData.client_user_agent = event.userAgent.slice(0, 512);
  if (event.fbp) userData.fbp = event.fbp;
  if (event.fbc) userData.fbc = event.fbc;

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: event.eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        action_source: "website",
        event_source_url:
          event.eventSourceUrl ??
          `${SITE_URL}${event.eventName === "Lead" ? "/blackfriday" : "/"}`,
        user_data: userData,
        ...(event.eventName === "Lead"
          ? {
              custom_data: {
                content_name: "Ultra Black Friday",
                content_category: "lead",
              },
            }
          : {}),
      },
    ],
    access_token: token,
  };

  const testCode = process.env.META_CAPI_TEST_EVENT_CODE;
  if (testCode) payload.test_event_code = testCode;

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    if (!response.ok) {
      const detail = await response.text();
      console.error("[meta] Conversions API rejected the event", response.status, detail.slice(0, 400));
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("[meta] Conversions API request failed", error);
    return "failed";
  }
}
