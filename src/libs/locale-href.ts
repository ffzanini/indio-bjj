import { type Locale, withLocalePath } from "@/libs/i18n";

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const hashIndex = href.indexOf("#");
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const [pathname, query] = path.split("?");
  const localized = withLocalePath(locale, pathname || "/");
  const qs = query ? `?${query}` : "";
  return `${localized}${qs}${hash}`;
}
