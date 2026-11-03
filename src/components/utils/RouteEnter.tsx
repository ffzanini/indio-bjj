"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

const seen = new Set<string>();

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function RouteEnter({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [play, setPlay] = useState(false);

  useLayoutEffect(() => {
    if (seen.has(pathname) || prefersReducedMotion()) {
      seen.add(pathname);
      setPlay(false);
      return;
    }
    seen.add(pathname);
    setPlay(true);
  }, [pathname]);

  return <div className={play ? "route-enter" : undefined}>{children}</div>;
}
