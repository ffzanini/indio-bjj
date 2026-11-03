export const SUPPORTED_LOCALES = ["pt", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

/** Sem cookie e sem idioma reconhecido, o site da academia fica em português. */
export const DEFAULT_LOCALE: Locale = "pt";

export const HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
};

export const isValidLocale = (value: string): value is Locale =>
  SUPPORTED_LOCALES.includes(value as Locale);

const mapBaseLanguageToLocale = (baseLanguage: string): Locale | null => {
  if (baseLanguage === "pt") return "pt";
  if (baseLanguage === "en") return "en";
  return null;
};

export const getLocaleFromBrowserLanguage = (
  browserLanguage?: string | null,
): Locale => {
  if (!browserLanguage) return DEFAULT_LOCALE;
  const baseLanguage = browserLanguage.toLowerCase().split("-")[0] ?? "";
  return mapBaseLanguageToLocale(baseLanguage) ?? DEFAULT_LOCALE;
};

export const getLocaleFromAcceptLanguage = (
  acceptLanguageHeader?: string | null,
): Locale => {
  if (!acceptLanguageHeader) return DEFAULT_LOCALE;

  const rankedLanguages = acceptLanguageHeader
    .split(",")
    .map((entry) => {
      const [langPart, qPart] = entry.trim().split(";q=");
      const quality = qPart ? Number(qPart) : 1;
      return {
        lang: langPart?.toLowerCase() ?? "",
        q: Number.isFinite(quality) ? quality : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const item of rankedLanguages) {
    if (!item.lang) continue;
    const base = item.lang.split("-")[0] ?? "";
    if (base === "*") continue;
    const mapped = mapBaseLanguageToLocale(base);
    if (mapped) return mapped;
  }

  return DEFAULT_LOCALE;
};

export const resolvePreferredLocale = ({
  pathnameLocale,
  cookieLocale,
  acceptLanguage,
}: {
  pathnameLocale?: string | null;
  cookieLocale?: string | null;
  acceptLanguage?: string | null;
}): Locale => {
  if (pathnameLocale && isValidLocale(pathnameLocale)) return pathnameLocale;
  if (cookieLocale && isValidLocale(cookieLocale)) return cookieLocale;
  return getLocaleFromAcceptLanguage(acceptLanguage);
};

export const stripLocaleFromPath = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isValidLocale(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
};

export const withLocalePath = (locale: Locale, pathname: string): string => {
  const basePath = stripLocaleFromPath(pathname);
  return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
};
