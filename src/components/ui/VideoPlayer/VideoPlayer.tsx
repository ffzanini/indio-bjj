"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  videoDescription: string;
  videoTitle: string;
  autoPlay?: boolean;
}

export function VideoPlayer({
  thumbnailUrl,
  videoUrl,
  videoDescription,
  videoTitle,
}: Readonly<VideoPlayerProps>) {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url: string): string | null => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.split("v=")[1]?.split("&")[0] || null;
    }
    if (url.includes("youtube.com/embed/")) {
      return url.split("embed/")[1]?.split("?")[0] || null;
    }
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1]?.split("?")[0] || null;
    }
    return null;
  };

  const embedUrl = (() => {
    if (!isPlaying) return null;
    if (videoUrl.includes("youtube.com/embed/")) {
      const joiner = videoUrl.includes("?") ? "&" : "?";
      return `${videoUrl}${joiner}autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    }
    const videoId = getVideoId(videoUrl);
    if (!videoId) return videoUrl;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  })();

  return (
    <div className="mx-6 lg:mx-0">
      <div className="relative rounded-xl overflow-hidden w-full max-w-3xl aspect-video border-4 border-white/10 shadow-2xl">
        {isPlaying && embedUrl ? (
          <iframe
            src={embedUrl}
            title={videoTitle}
            allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <button
            className="absolute inset-0 z-10 h-full w-full cursor-pointer"
            onClick={() => setIsPlaying(true)}
            type="button"
            aria-label={`Reproduzir vídeo: ${videoTitle}`}
          >
            <Image
              src={thumbnailUrl}
              alt={videoTitle}
              width={1800}
              height={1000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary md:h-20 md:w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-8 w-8 text-white md:h-10 md:w-10"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="text-outline-shadow-black absolute right-4 bottom-4 left-4 text-center text-lg font-bold text-white md:text-left md:text-xl">
              {videoDescription}
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
