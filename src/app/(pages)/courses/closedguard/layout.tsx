import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Close Guard Course',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
