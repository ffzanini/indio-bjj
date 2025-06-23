"use client";

import { useEffect, useRef, useState } from "react";

interface InstagramEmbedProps {
  url: string;
  width?: number | string;
}

interface InstagramWindow extends Window {
  instgrm?: {
    Embeds: {
      process: () => void;
    };
  };
}

export function InstagramEmbed({ url, width = 400 }: InstagramEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scriptId = "instagram-embed-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const process = () => {
      const w = window as InstagramWindow;
      if (w.instgrm?.Embeds?.process) {
        w.instgrm.Embeds.process();
      }
    };

    const timeout = setTimeout(process, 300);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          Array.from(mutation.addedNodes).some(
            (node) => node.nodeName === "IFRAME"
          )
        ) {
          setIsVisible(true);
          observer.disconnect();
        }
      }
    });

    if (ref.current) {
      observer.observe(ref.current, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [url]);

  return (
    <div
      ref={ref}
      className={`w-full flex justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ width }}
      ></blockquote>
    </div>
  );
}
