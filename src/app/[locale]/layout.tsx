import { notFound } from "next/navigation";

import { Footer, Header } from "@/components";
import { LazyClientToaster } from "@/components/utils/LazyClientToaster";
import { LazyScrollToTop } from "@/components/utils/LazyScrollToTop";
import AppProvider from "@/providers/AppProvider";
import { isValidLocale, SUPPORTED_LOCALES } from "@/libs/i18n";
import { loadLocaleChrome } from "@/locales/load-locale";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-static";
export const revalidate = 86400;

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<LocaleLayoutProps>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const initialTranslations = await loadLocaleChrome(locale);

  return (
    <AppProvider initialLocale={locale} initialTranslations={initialTranslations}>
      <Header />
      {children}
      <LazyClientToaster />
      <LazyScrollToTop />
      <Footer />
    </AppProvider>
  );
}
