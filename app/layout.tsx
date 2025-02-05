import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type React from "react"
import { spaceGrotesk } from "@/app/globals"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {/* Render the Navbar for all pages except the home page */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

