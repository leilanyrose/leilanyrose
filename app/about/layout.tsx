import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Leilany Rose Healing",
  description: "Learn about Leilany Rose Calataya - certified healer, meditation instructor, and counselor-in-training",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
