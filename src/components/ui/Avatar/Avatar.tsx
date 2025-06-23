"use client";

import React, { useState } from "react";
import { cn } from "@/libs/cn";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  size?: number; // opcional, padrão 40px (h-10 w-10)
}

export function Avatar({
  src,
  alt = "Avatar",
  fallback,
  size = 40,
  className,
  ...props
}: Readonly<AvatarProps>) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const sizeClass = `h-[${size}px] w-[${size}px]`;

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        sizeClass,
        className
      )}
      {...props}
    >
      {src && !error && (
        <Image
          src={src}
          alt={alt}
          height={size}
          width={size}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "object-cover",
            sizeClass,
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
      {(!src || error || !loaded) && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-300"
          )}
        >
          {fallback}
        </div>
      )}
    </div>
  );
}
