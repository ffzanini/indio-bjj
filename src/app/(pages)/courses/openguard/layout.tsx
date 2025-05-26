import type { Metadata } from 'next'
import Script from 'next/script'
import Head from 'next/head'

const description = `Aprenda guarda aberta com Fabiano Índio | Índio Jiu Jitsu`

export const metadata: Metadata = {
  title: 'Aprenda guarda aberta com Fabiano Índio | Índio Jiu Jitsu',
  description,
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
      </Head>

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

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5J2TP47Q"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {children}
    </>
  )
}
