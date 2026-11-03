"use client";

import { useEffect, type ReactNode } from "react";

import { FacebookPixel } from "@/components/utils/FacebookPixel";
import { trackEvent } from "@/libs/facebookPixel";

const PAGE = "blackfriday";

export function BlackFridayTracking() {
  useEffect(() => {
    trackEvent("ViewContent", {
      page: PAGE,
      content_name: "Ultra Black Friday",
      content_category: "lead",
    });
  }, []);

  return <FacebookPixel />;
}

export function BlackFridayCta({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#form"
      className={`${className} cursor-pointer`}
      onClick={() =>
        trackEvent("ButtonClick", { page: PAGE, button: "blackfriday_cta" })
      }
    >
      {children}
    </a>
  );
}
