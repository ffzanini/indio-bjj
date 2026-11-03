"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

import { useTranslation } from "@/context";
import { localizeHref } from "@/libs/locale-href";

export function LocaleLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const { location } = useTranslation();
  const resolved =
    typeof href === "string" ? localizeHref(href, location) : href;

  return <Link href={resolved} {...rest} />;
}
