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

const sendToPixel = (
  event: string,
  options: Record<string, unknown>,
  eventId?: string,
) => {
  if (typeof window.fbq !== "function") return false;
  const command = STANDARD_EVENTS.has(event) ? "track" : "trackCustom";
  if (eventId) window.fbq(command, event, options, { eventID: eventId });
  else window.fbq(command, event, options);
  return true;
};

export const trackEvent = (
  event: string,
  options: Record<string, unknown> = {},
  eventId?: string,
) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...(eventId ? { event_id: eventId } : {}),
    ...options,
  });

  if (sendToPixel(event, options, eventId)) return;

  let tries = 0;
  const id = window.setInterval(() => {
    tries += 1;
    if (sendToPixel(event, options, eventId) || tries >= 20) window.clearInterval(id);
  }, 300);
};
