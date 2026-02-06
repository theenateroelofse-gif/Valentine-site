import type { Metadata, Viewport } from "next"
import { Geist } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Happy Valentine's Day",
  description: "A special Valentine's Day page for someone I love",
}

export const viewport: Viewport = {
  themeColor: "#e0325b",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
