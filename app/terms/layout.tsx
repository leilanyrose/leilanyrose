import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Leilany Rose Wellness",
  description: "Terms of Service for Leilany Rose Wellness website and services",
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
