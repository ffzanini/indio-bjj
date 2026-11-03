import { notFound } from "next/navigation";

import { isValidLocale, type Locale } from "@/libs/i18n";
import { buildPageMetadata } from "@/libs/page-metadata";
import { loadLocaleUi } from "@/locales/load-locale";

type PageParams = Promise<{ locale: string }>;

type MetadataOptions = Omit<
  Parameters<typeof buildPageMetadata>[0],
  "locale" | "path" | "title" | "description"
>;

export async function readLocale(params: PageParams): Promise<Locale> {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return locale;
}

export async function metadataFromUi(
  params: PageParams,
  path: string,
  key: string,
  options?: MetadataOptions,
) {
  const locale = await readLocale(params);
  const ui = await loadLocaleUi(locale);
  const seo = ui.seo as Record<string, string>;
  return buildPageMetadata({
    locale,
    path,
    title: seo[`${key}_title`] ?? "",
    description: seo[`${key}_description`] ?? "",
    ...options,
  });
}
