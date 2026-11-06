const COOKIE_MAX_AGE = 60 * 60 * 24 * 90;

const readCookie = (name: string) => {
  if (typeof document === "undefined") return undefined;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = document.cookie.match(new RegExp(`(?:^|; )${escaped}=([^;]*)`));
  if (!match?.[1]) return undefined;
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return undefined;
  }
};

export const readMetaCookies = () => ({
  fbp: readCookie("_fbp"),
  fbc: readCookie("_fbc"),
});

export const captureFbclid = () => {
  if (typeof window === "undefined" || readCookie("_fbc")) return;

  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (!fbclid || !/^[A-Za-z0-9_-]{1,200}$/.test(fbclid)) return;

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `_fbc=${encodeURIComponent(`fb.1.${Date.now()}.${fbclid}`)}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
};

export const createEventId = () => {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  const bytes = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = bytes.map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
};

const sleep = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

export const postPageView = async (eventId: string, signal?: AbortSignal) => {
  const started = Date.now();
  let cookies = readMetaCookies();
  while (!cookies.fbp && Date.now() - started < 1500) {
    await sleep(150);
    if (signal?.aborted) return;
    cookies = readMetaCookies();
  }
  if (signal?.aborted) return;

  await fetch("/api/meta/capi", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    signal,
    body: JSON.stringify({
      eventId,
      eventSourceUrl: window.location.href,
      fbp: cookies.fbp,
      fbc: cookies.fbc,
    }),
  }).catch(() => undefined);
};
