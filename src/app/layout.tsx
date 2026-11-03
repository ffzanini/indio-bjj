import type { Metadata } from "next";
import Script from "next/script";

import { HtmlLang } from "@/components/utils/HtmlLang";
import { JsonLd } from "@/components/utils/JsonLd";
import { AnalyticsWrapper } from "@/components/utils/Analytics";
import { SITE_NAME, SITE_URL } from "@/constants/seo";
import { fontMontserrat } from "./fonts";
import "./globals.css";

const defaultDescription =
  "Academia de Jiu Jitsu em Pelotas. JA Índio Jiu Jitsu: aulas e cursos de Jiu-Jitsu para todas as idades e níveis em Pelotas. Cursos de meia guarda, guarda aberta, passagens de guarda, nogi e drills com Fabiano Índio. Agende sua aula experimental de Jiu Jitsu em Pelotas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    template: `%s | ${SITE_NAME} - Jiu Jitsu Pelotas`,
  },
  description: defaultDescription,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/pt`,
    languages: {
      "pt-BR": `${SITE_URL}/pt`,
      en: `${SITE_URL}/en`,
    },
  },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: `${SITE_URL}/pt`,
    siteName: SITE_NAME,
    locale: "pt_BR",
    alternateLocale: ["en_US"],
    title: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no" suppressHydrationWarning data-scroll-behavior="smooth">
      <Script
        id="google-id-openguard"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5J2TP47Q');`,
        }}
      />
      <body className={`${fontMontserrat.className} antialiased`} suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");var d=document.documentElement;d.classList.remove("light","dark");if(t==="light"){d.classList.add("light");d.style.colorScheme="light"}else{d.classList.add("dark");d.style.colorScheme="dark"}}catch(e){}})();`}
        </Script>
        <JsonLd />
        <HtmlLang />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5J2TP47Q"
              height="0"
              width="0"
              style="display:none;visibility:hidden"
            ></iframe>
          `,
          }}
        />
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
