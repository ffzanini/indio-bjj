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
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setShouldLoad(true);
        io.disconnect();
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

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
      w.instgrm?.Embeds?.process();
    };

    const timeout = setTimeout(process, 300);
    const node = ref.current;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          Array.from(mutation.addedNodes).some(
            (added) => added.nodeName === "IFRAME",
          )
        ) {
          setIsVisible(true);
          observer.disconnect();
        }
      }
    });

    if (node) {
      observer.observe(node, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [shouldLoad, url]);

  return (
    <div
      ref={ref}
      className={`flex min-h-80 w-full justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {shouldLoad && (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{ width }}
        />
      )}
    </div>
  );
}
