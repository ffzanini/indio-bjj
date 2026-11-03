declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const STANDARD_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "Contact",
  "CompleteRegistration",
  "InitiateCheckout",
  "AddToCart",
  "Purchase",
  "Subscribe",
]);

const sendToPixel = (event: string, options: Record<string, unknown>) => {
  if (typeof window.fbq !== "function") return false;
  window.fbq(STANDARD_EVENTS.has(event) ? "track" : "trackCustom", event, options);
  return true;
};

export const trackEvent = (
  event: string,
  options: Record<string, unknown> = {},
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...options });

  if (sendToPixel(event, options)) return;

  let tries = 0;
  const id = window.setInterval(() => {
    tries += 1;
    if (sendToPixel(event, options) || tries >= 20) window.clearInterval(id);
  }, 300);
};
