/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'

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
