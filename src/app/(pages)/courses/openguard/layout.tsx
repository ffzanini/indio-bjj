/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import Script from 'next/script'

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

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
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window,document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${FACEBOOK_PIXEL_ID}');
        fbq('track', 'PageView');
      `,
          }}
        />
      </head>
      <meta name="google" content="notranslate" />
      <div>{children}</div>
    </>
  )
}
