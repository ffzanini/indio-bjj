import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quem Somos | Índio Jiu Jitsu',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
