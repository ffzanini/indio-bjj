/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    fbq: ((...args: any[]) => void) & {
      callMethod?: (...args: any[]) => void;
      queue?: any[];
      loaded?: boolean;
      version?: string;
      push?: (...args: any[]) => void;
    };
    _fbq: any;
  }
}

export const initFacebookPixel = () => {
  if (!FACEBOOK_PIXEL_ID) {
    console.error("Facebook Pixel ID is not set");
    return;
  }

  if (typeof window.fbq === "undefined") {
    window.fbq = function (...args: any[]) {
      window.fbq.callMethod
        ? window.fbq.callMethod(...args)
        : window.fbq.queue?.push(args);
    };
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    script.onload = () => {
      window.fbq("init", FACEBOOK_PIXEL_ID);
      window.fbq("track", "PageView");
    };
    document.head.appendChild(script);
  }
};

export const trackEvent = (
  event: string,
  options: Record<string, any> = {}
) => {
  if (typeof window.fbq === "undefined") {
    console.warn("Facebook Pixel not initialized");
    return;
  }

  if (event === "PageView") {
    window.fbq("track", event, options);
  } else {
    window.fbq("trackCustom", event, options);
  }
};
