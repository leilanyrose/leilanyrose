import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-cormorant" 
})

export const metadata: Metadata = {
  title: "Home | Leilany Rose Healing",
  description: "Spiritual healing, meditation, breathwork, and trauma-informed counseling services",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>{children}</body>
    </html>
  )
}
