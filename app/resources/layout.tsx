import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resources | Leilany Rose Wellness",
  description:
    "Explore books, media, and spiritual teachings that have inspired my journey. Resources for self-mastery, consciousness, and awakening.",
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
