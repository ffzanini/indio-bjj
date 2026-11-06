import { NextResponse } from "next/server";

import {
  getClientIp,
  readMetaContext,
  sendConversionEvent,
} from "@/libs/metaConversions";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 40;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const current = requestsByIp.get(ip);
  if (!current || now > current.resetAt) {
    requestsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  current.count += 1;
  requestsByIp.set(ip, current);
  return false;
};

export async function POST(req: Request) {
  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const context = readMetaContext(body, { requireEventId: true });
  if (!context) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const result = await sendConversionEvent({
    eventName: "PageView",
    eventId: context.eventId,
    eventSourceUrl: context.eventSourceUrl,
    fbp: context.fbp,
    fbc: context.fbc,
    ip: getClientIp(req),
    userAgent: req.headers.get("user-agent") ?? undefined,
  });

  if (result === "failed") {
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return new NextResponse(null, { status: 204 });
}
