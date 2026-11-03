import type { Metadata } from "next";

import { SITE_NAME, SITE_URL } from "@/constants/seo";
import { type Locale, withLocalePath } from "@/libs/i18n";

const OG_LOCALE: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
};

export function fillTemplate(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

type BuildPageMetadataArgs = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  keywords?: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  absoluteTitle = false,
  noindex = false,
}: BuildPageMetadataArgs): Metadata {
  const localizedPath = withLocalePath(locale, path);
  const url = `${SITE_URL}${localizedPath}`;
  const languages = {
    "pt-BR": `${SITE_URL}${withLocalePath("pt", path)}`,
    en: `${SITE_URL}${withLocalePath("en", path)}`,
  };
  const alternateLocale = locale === "pt" ? ["en_US"] : ["pt_BR"];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
      description,
      url,
      locale: OG_LOCALE[locale],
      alternateLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${SITE_NAME} - Jiu Jitsu Pelotas`,
      description,
    },
    robots: noindex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
