"use client";

import { useEffect } from "react";
import Script from "next/script";

import { trackEvent } from "@/libs/facebookPixel";
import { captureFbclid, createEventId, postPageView } from "@/libs/metaBrowser";

const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
const SAFE_PIXEL_ID = PIXEL_ID && /^\d{5,20}$/.test(PIXEL_ID) ? PIXEL_ID : "";

const recentPageView = { path: "", at: 0 };

export function FacebookPixel() {
  useEffect(() => {
    if (!SAFE_PIXEL_ID) return;

    const path = window.location.pathname + window.location.search;
    const now = Date.now();
    if (recentPageView.path === path && now - recentPageView.at < 1500) return;
    recentPageView.path = path;
    recentPageView.at = now;

    captureFbclid();
    const eventId = createEventId();
    trackEvent("PageView", { page: window.location.pathname }, eventId);
    void postPageView(eventId);
  }, []);

  if (!SAFE_PIXEL_ID) return null;

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${SAFE_PIXEL_ID}');`}
      </Script>
      <noscript>
        <img
          alt=""
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${SAFE_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
