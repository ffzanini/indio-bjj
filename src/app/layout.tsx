import type { Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer, Toaster } from '@/components'
import { AppProvider } from '@/providers'
import { fontMavenPro } from './fonts'

import './globals.css'

const description = `Aprenda meia guarda com Fabiano Índio`
export const metadata: Metadata = {
  title: 'Aprenda meia guarda com Fabiano Índio',
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
      <body className={'min-h-screen' + fontMavenPro.className}>
        <AppProvider>
          <Toaster richColors />
          {children}
          <SpeedInsights />
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
