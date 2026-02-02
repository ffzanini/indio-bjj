import type { Metadata } from "next";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppProvider from "@/providers/AppProvider";
import {
  ClientToaster,
  Footer,
  Header,
  SetInitialLanguage,
} from "@/components";

import { DEFAULT_KEYWORDS_STRING, SITE_NAME, SITE_URL } from "@/constants/seo";

import { fontMontserrat } from "./fonts";

import "./globals.css";

const defaultDescription =
  "Academia de Jiu Jitsu em Pelotas. JA Índio Jiu Jitsu: aulas e cursos de Jiu-Jitsu para todas as idades e níveis em Pelotas. Cursos de meia guarda, guarda aberta, nogi e drills com Fabiano Índio. Agende sua aula experimental de Jiu Jitsu em Pelotas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    template: `%s | ${SITE_NAME} - Jiu Jitsu Pelotas`,
  },
  description: defaultDescription,
  keywords: DEFAULT_KEYWORDS_STRING,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    title: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    description: defaultDescription,
    images: [
      {
        url: `${SITE_URL}/images/visit-card.png`,
        width: 1120,
        height: 630,
        alt: `${SITE_NAME} - Academia de Jiu Jitsu em Pelotas`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Jiu Jitsu em Pelotas | ${SITE_NAME} - Academia de Jiu Jitsu Pelotas`,
    description: defaultDescription,
    images: [`${SITE_URL}/images/visit-card.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Adicione aqui quando tiver: google: "seu-codigo-google-search-console",
  },
  other: {
    google: "notranslate",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE_NAME,
  description: defaultDescription,
  url: SITE_URL,
  image: `${SITE_URL}/images/visit-card.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pelotas",
    addressRegion: "RS",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Pelotas",
  },
  sameAs: [],
  potentialAction: {
    "@type": "JoinAction",
    target: {
      "@type": "EntryPoint",
      url: "https://wa.me/5553991886599",
      actionPlatform: ["http://schema.org/WhatsApp"],
    },
    name: "Agendar aula experimental de Jiu Jitsu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" translate="no" suppressHydrationWarning>
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
      <body className={`${fontMontserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdLocalBusiness),
          }}
        />
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
        <AppProvider>
          <SetInitialLanguage />
          <Header />
          {children}
          <ClientToaster />
          <Analytics mode="production" />
          <SpeedInsights />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
