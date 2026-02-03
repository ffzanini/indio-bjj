"use client";
import { useState } from "react";
import Image from "next/image";
interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  videoDescription: string;
  videoTitle: string;
  /** Se true, esconde a thumbnail e mostra o player para autoplay ao entrar na página */
  autoPlay?: boolean;
}

export function VideoPlayer({
  thumbnailUrl,
  videoUrl,
  videoDescription,
  videoTitle,
  autoPlay = false,
}: Readonly<VideoPlayerProps>) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Extrai o ID do vídeo se for uma URL completa do YouTube
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

  // Converte URL para formato embed se necessário
  const getEmbedUrl = (url: string): string => {
    // Se já for um embed URL, retorna como está
    if (url.includes("youtube.com/embed/")) {
      return url;
    }
    
    // Tenta extrair o ID e criar o embed URL
    const videoId = getVideoId(url);
    if (videoId) {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}&iv_load_policy=3`;
    }
    
    // Se não conseguir, retorna a URL original
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const watchUrl = videoUrl.includes("youtube.com/watch") 
    ? videoUrl 
    : `https://www.youtube.com/watch?v=${getVideoId(videoUrl) || ""}`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="mx-6 lg:mx-0">
      <div className="relative rounded-xl overflow-hidden w-full max-w-3xl aspect-video border-4 border-white/10 shadow-2xl">
        {/* Iframe sempre renderizado com src correto desde o início - crítico para iOS Safari */}
        {/* No iOS, o iframe precisa estar sempre visível (mesmo que atrás) para carregar */}
        <iframe
          src={embedUrl}
          title={videoTitle}
          allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full absolute inset-0"
          style={{ 
            border: 'none',
            width: '100%',
            height: '100%',
            minHeight: '315px',
            zIndex: isPlaying ? 50 : 1
          }}
          loading="eager"
          frameBorder="0"
        />
        {/* Thumbnail overlay - completamente removido do DOM quando isPlaying é true */}
        {!isPlaying && (
          <button
            className="absolute inset-0 cursor-pointer z-40 w-full h-full"
            onClick={handlePlayClick}
            type="button"
            aria-label={`Reproduzir vídeo: ${videoTitle}`}
          >
            <Image
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
            <div className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg md:text-xl text-center md:text-left text-outline-shadow-black">
              {videoDescription}
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
