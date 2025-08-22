import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Leilany Rose Healing",
  description: "Spiritual healing services including Divine Healing, Soul Contract Readings, and Holy Fire Reiki",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
