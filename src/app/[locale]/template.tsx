"use client";

import { usePathname } from "next/navigation";

import { RouteEnter } from "@/components/utils/RouteEnter";

export default function LocaleTemplate({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  return <RouteEnter key={pathname}>{children}</RouteEnter>;
}
