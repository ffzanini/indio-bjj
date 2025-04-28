/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer, Header, Toaster } from '@/components'
import { AppProvider } from '@/providers'
import { fontPoppins } from './fonts'

import './globals.css'

const description = `JA Jiu Jitsu | Índio Jiu Jitsu`
export const metadata: Metadata = {
  title: 'JA Jiu Jitsu | Índio Jiu Jitsu',
  description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" translate="no">
      <meta name="google" content="notranslate" />
      <body className={'min-h-screen' + fontPoppins.className}>
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
