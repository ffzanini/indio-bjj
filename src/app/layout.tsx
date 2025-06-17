import type { Metadata } from "next";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppProvider from "@/providers/AppProvider";
import {
  Footer,
  Header,
  ClientToaster,
  SetInitialLanguage,
} from "@/components";

import { fontPoppins } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://indiobjj.com.br"),
  title: "JA Jiu Jitsu | Índio Jiu Jitsu",
  description:
    "Na JA Jiu-Jitsu, nossos professores experientes e dedicados estão comprometidos em oferecer uma orientação personalizada, promovendo o crescimento técnico e pessoal de cada aluno. Criamos um ambiente acolhedor, respeitoso e motivador, onde praticantes de todos os níveis se sentem parte de uma verdadeira família. Aqui, o Jiu-Jitsu vai além da arte marcial — é uma ferramenta de transformação, disciplina e autoconfiança.",
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: "https://indiobjj.com.br",
    title: "JA Jiu Jitsu | Índio Jiu Jitsu",
    description:
      "Na JA Jiu-Jitsu, nossos professores experientes e dedicados estão comprometidos em oferecer uma orientação personalizada, promovendo o crescimento técnico e pessoal de cada aluno. Criamos um ambiente acolhedor, respeitoso e motivador, onde praticantes de todos os níveis se sentem parte de uma verdadeira família. Aqui, o Jiu-Jitsu vai além da arte marcial — é uma ferramenta de transformação, disciplina e autoconfiança.",
    images: [
      {
        url: "/images/visit-card.png",
        width: 1120,
        height: 630,
        alt: "JA Jiu Jitsu | Índio Jiu Jitsu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JA Jiu Jitsu | Índio Jiu Jitsu",
    description:
      "Na JA Jiu-Jitsu, nossos professores experientes e dedicados estão comprometidos em oferecer uma orientação personalizada, promovendo o crescimento técnico e pessoal de cada aluno. Criamos um ambiente acolhedor, respeitoso e motivador, onde praticantes de todos os níveis se sentem parte de uma verdadeira família. Aqui, o Jiu-Jitsu vai além da arte marcial — é uma ferramenta de transformação, disciplina e autoconfiança.",
    images: ["/images/visit-card.png"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "JA Jiu Jitsu | Índio Jiu Jitsu",
      url: "https://indiobjj.com.br",
      jobTitle: "Jiu Jitsu",
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" translate="no" suppressHydrationWarning>
      <meta name="google" content="notranslate" />
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
      <body className={`${fontPoppins.className} antialiased`}>
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
