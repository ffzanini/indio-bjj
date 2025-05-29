/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import Script from 'next/script'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer, Header, Toaster } from '@/components'
import { AppProvider } from '@/providers'
import { fontPoppins } from './fonts'

import './globals.css'

const description = `Na JA Jiu-Jitsu, nossos professores experientes e dedicados estão comprometidos em oferecer uma orientação personalizada, promovendo o crescimento técnico e pessoal de cada aluno. Criamos um ambiente acolhedor, respeitoso e motivador, onde praticantes de todos os níveis se sentem parte de uma verdadeira família. Aqui, o Jiu-Jitsu vai além da arte marcial — é uma ferramenta de transformação, disciplina e autoconfiança.`
export const metadata: Metadata = {
  title: 'JA Jiu Jitsu | Índio Jiu Jitsu',
  description,
  other: {
    google: 'notranslate',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark" translate="no">
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
      <body className={'min-h-screen' + fontPoppins.className}>
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
          <Header />
          <Toaster richColors />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
