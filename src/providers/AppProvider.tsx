import { ThemeProvider } from "@/providers/theme";

import { InternacionalizationProvider } from "@/context/internacionalization-context";
import { DEFAULT_LOCALE, type Locale } from "@/libs/i18n";
import type { InitialTranslations } from "@/locales/load-locale";

export function AppProvider({
  children,
  initialLocale = DEFAULT_LOCALE,
  initialTranslations,
}: Readonly<{
  children: React.ReactNode;
  initialLocale?: Locale;
  initialTranslations: InitialTranslations;
}>) {
  return (
    <ThemeProvider>
      <InternacionalizationProvider
        initialLocale={initialLocale}
        initialTranslations={initialTranslations}
      >
        {children}
      </InternacionalizationProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
