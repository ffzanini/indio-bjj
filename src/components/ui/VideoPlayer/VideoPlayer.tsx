"use client";
import { useState } from "react";
import { ZoomImage } from "@/components";
interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  videoDescription: string;
  videoTitle: string;
}

export function VideoPlayer({
  thumbnailUrl,
  videoUrl,
  videoDescription,
  videoTitle,
}: Readonly<VideoPlayerProps>) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mx-6 border-4 border-white/10 shadow-2xl rounded-xl lg:mx-0">
      <div className="relative rounded-xl overflow-hidden w-full max-w-3xl aspect-video">
        {!isPlaying ? (
          <button
            className="relative cursor-pointer w-full h-full"
            onClick={() => setIsPlaying(true)}
          >
            <ZoomImage
              src={thumbnailUrl}
              alt={videoTitle}
              width={1800}
              height={100}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg md:text-xl text-center md:text-left">
              {videoDescription}
            </div>
          </button>
        ) : (
          <iframe
            src={videoUrl}
            title={videoTitle}
            allow="autoplay; encrypted-media; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
