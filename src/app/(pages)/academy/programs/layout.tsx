import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programas | Índio Jiu Jitsu',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
