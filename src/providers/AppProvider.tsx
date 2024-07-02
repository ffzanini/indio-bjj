'use client'
import { ThemeProvider } from 'next-themes'

export function AppProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
