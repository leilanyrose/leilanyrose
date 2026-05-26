import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, EB_Garamond, Dancing_Script } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair" 
})
const ebGaramond = EB_Garamond({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-eb-garamond" 
})
const dancingScript = Dancing_Script({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script" 
})

export const metadata: Metadata = {
  title: "Home | Leilany Rose Wellness",
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
      <body className={`${inter.variable} ${playfair.variable} ${ebGaramond.variable} ${dancingScript.variable} font-sans antialiased`} style={{ WebkitFontSmoothing: 'antialiased' }}>{children}</body>
    </html>
  )
}
