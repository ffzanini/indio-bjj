"use client";

import { useEffect, useRef, useState } from "react";
import { LuLoader } from "react-icons/lu";
import Image from "next/image";

interface ZoomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export function ZoomImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  priority = false,
}: Readonly<ZoomImageProps>) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ZoomWrapper, setZoomWrapper] = useState<React.ComponentType<{
    children: React.ReactNode;
  }> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const loadZoom = () => {
    if (ZoomWrapper) return;
    import("./ZoomWrapper").then((mod) => {
      setZoomWrapper(() => mod.ZoomWrapper);
    });
  };

  useEffect(() => {
    if (ZoomWrapper) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadZoom();
      },
      { rootMargin: "50px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ZoomWrapper]);

  const imageNode = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      onClick={ZoomWrapper ? undefined : loadZoom}
      className={`${className ?? ""} overflow-hidden shadow-md transition-opacity duration-300 ${
        isLoaded ? "opacity-100" : "opacity-0"
      } ${ZoomWrapper ? "" : "cursor-zoom-in"}`}
      style={style}
      {...(priority ? { priority: true as const } : { loading: "lazy" as const })}
    />
  );

  return (
    <div ref={containerRef} className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300/30 dark:bg-gray-700/20 animate-pulse backdrop-blur-sm rounded-md z-10 flex items-center justify-center">
          <LuLoader className="h-6 w-6 text-white dark:text-gray-200 animate-spin" />
        </div>
      )}
      {ZoomWrapper ? <ZoomWrapper>{imageNode}</ZoomWrapper> : imageNode}
    </div>
  );
}
