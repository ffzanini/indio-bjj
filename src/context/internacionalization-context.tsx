"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

import {
  DEFAULT_LOCALE,
  getLocaleFromBrowserLanguage,
  HTML_LANG,
  isValidLocale,
  withLocalePath,
  type Locale,
} from "@/libs/i18n";
import type { InitialTranslations, Translations } from "@/locales/load-locale";

type Locations = Locale;

export interface InternacionalizationInterface {
  location: Locations;
  setLocation: (location: Locations) => void;
  translations: Translations;
  isLanguageSwitching: boolean;
}

export const InternacionalizationContext = createContext(
  {} as InternacionalizationInterface,
);

const useTranslation = () => {
  const context = useContext(InternacionalizationContext);

  if (context === undefined) {
    throw new Error(
      "useTranslation must be used within InternacionalizationProvider",
    );
  }

  return context;
};

const LANGUAGE_STORAGE_KEY = "app-language";

const InternacionalizationProvider = ({
  children,
  initialLocale = DEFAULT_LOCALE,
  initialTranslations,
}: Readonly<{
  children: ReactNode;
  initialLocale?: Locations;
  initialTranslations: InitialTranslations;
}>) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isLanguageSwitching, setIsLanguageSwitching] = useState(false);
  const [translationsCache, setTranslationsCache] = useState<
    Partial<Record<Locale, InitialTranslations>>
  >({ [initialLocale]: initialTranslations });

  useEffect(() => {
    setTranslationsCache((prev) => ({
      ...prev,
      [initialLocale]: {
        ...prev[initialLocale],
        ...initialTranslations,
      },
    }));
  }, [initialLocale, initialTranslations]);

  const pathnameLocale = useMemo(() => {
    const firstSegment = (pathname || "/").split("/").find(Boolean);
    if (firstSegment && isValidLocale(firstSegment)) return firstSegment;
    return null;
  }, [pathname]);

  const location = useMemo<Locations>(() => {
    if (pathnameLocale) return pathnameLocale;
    if (globalThis.window !== undefined) {
      const storedLanguage =
        globalThis.window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (storedLanguage && isValidLocale(storedLanguage)) return storedLanguage;
      return getLocaleFromBrowserLanguage(globalThis.window.navigator.language);
    }
    return initialLocale;
  }, [initialLocale, pathnameLocale]);

  useEffect(() => {
    if (globalThis.window === undefined) return;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, location);
    document.cookie = `${LANGUAGE_STORAGE_KEY}=${location};path=/;max-age=31536000;samesite=lax`;
  }, [location]);

  useEffect(() => {
    if (!isLanguageSwitching) return;
    const timer = setTimeout(() => setIsLanguageSwitching(false), 220);
    return () => clearTimeout(timer);
  }, [location, isLanguageSwitching]);

  const setLocationWithPersistence = useCallback(
    (lang: Locations) => {
      if (lang === location) return;
      setIsLanguageSwitching(true);
      if (globalThis.window !== undefined) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        document.cookie = `${LANGUAGE_STORAGE_KEY}=${lang};path=/;max-age=31536000;samesite=lax`;
        document.documentElement.lang = HTML_LANG[lang];
      }
      const nextPath = withLocalePath(lang, pathname || "/");
      const docWithTransition = document as Document & {
        startViewTransition?: (callback: () => void) => void;
      };
      if (docWithTransition.startViewTransition) {
        docWithTransition.startViewTransition(() => router.push(nextPath));
        return;
      }
      router.push(nextPath);
    },
    [location, pathname, router],
  );

  const translations = (translationsCache[location] ??
    initialTranslations) as Translations;

  const objTranslations = useMemo(
    () => ({
      location,
      setLocation: setLocationWithPersistence,
      translations,
      isLanguageSwitching,
    }),
    [isLanguageSwitching, location, setLocationWithPersistence, translations],
  );

  return (
    <InternacionalizationContext.Provider value={objTranslations}>
      {children}
      {isLanguageSwitching && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-9999 h-0.5 overflow-hidden">
          <div className="h-full w-1/4 animate-[loading-slide_1100ms_ease-in-out_infinite] rounded-r-full bg-primary-ja" />
        </div>
      )}
    </InternacionalizationContext.Provider>
  );
};

export { InternacionalizationProvider, useTranslation };
