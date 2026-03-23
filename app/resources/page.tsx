import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Film, Sparkles, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function ResourcesPage() {
  const books = [
    {
      title: "Unveiled Mysteries",
      author: "Godfre Ray King",
      description: "Guide to spiritual laws, self-mastery, and personal transformation, showing how to connect with your Divine Self.",
    },
    {
      title: "Law of Life",
      author: "ADK Luk",
      description: "Practical guidance on spiritual principles and applying them in everyday life.",
    },
    {
      title: "Lady Master Pearl",
      author: "Peter Mt. Shasta",
      description: "Insights from the Ascended Masters, exploring conscious living and awakening.",
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      description: "Classic memoir sharing the author's journey of self-realization and teachings of Kriya Yoga.",
    },
    {
      title: "The Energy Bus",
      author: "Jon Gordon",
      description: "Practical guide to cultivating positivity, resilience, and personal empowerment in daily life.",
    },
    {
      title: "Radical Forgiveness",
      author: "Colin Tipping",
      description: "Teaches forgiveness as a pathway to releasing past hurts and reclaiming personal power.",
    },
  ]

  const media = [
    {
      title: "Awake: The Life of Yogananda",
      platform: "Gaia",
      description: "Documentary exploring the life and teachings of Paramahansa Yogananda.",
    },
  ]

  const teachings = [
    {
      title: "The I AM Teachings",
      author: "Peter Mt. Shasta",
      url: "https://iamteachings.com",
      description: "Guidance on self-realization, conscious awareness, and living with presence.",
    },
    {
      title: "St. Germain Foundation / Ascended Master Teachings",
      url: "https://saintgermainfoundation.org",
      description: "Accessible teachings on consciousness, self-mastery, and personal transformation.",
    },
    {
      title: "Summit Lighthouse",
      url: "https://summitlighthouse.org",
      description: "Meditation, affirmations, and wisdom from the Ascended Masters.",
    },
    {
      title: "I AM Free",
      url: "https://iamfree.co.za",
      description: "Publicly available texts and meditations for self-exploration.",
    },
    {
      title: "The Bridge to Spiritual Freedom",
      url: "https://thebridgetospiritualfreedom.org",
      description: "Beginner-friendly guidance on consciousness, liberation, and spiritual presence.",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Full Violet Flame Background - Dark Lavender */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-violet-700/70 via-purple-600/50 to-violet-700/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/40 via-violet-500/30 to-purple-600/50"></div>
      </div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/lrc-logo.png"
                  alt="Leilany Rose Healing"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                  Leilany Rose Healing
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Services
                </Link>
                <Link href="/resources" className="text-purple-600 font-medium">
                  Resources
                </Link>
                <Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Connect
                </Link>
                <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-200/50">
                  <a
                    href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Free Connection Call
                  </a>
                </Button>
              </div>

              <MobileMenu currentPage="resources" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 drop-shadow-2xl">Explore & Learn</h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-xl">
              These books, teachings, and media have inspired my spiritual journey. They explore self-mastery, consciousness, and awakening, and are accessible to anyone beginning their path.
            </p>
          </div>
        </section>

        {/* Books & Writings Section */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif text-white drop-shadow-2xl">Books & Writings</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <Card key={index} className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif text-gray-800 mb-1">{book.title}</h3>
                    <p className="text-purple-600 text-sm font-medium mb-3">{book.author}</p>
                    <p className="text-gray-600 text-sm italic leading-relaxed">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media & Inspiration Section */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Film className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif text-white drop-shadow-2xl">Media & Inspiration</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item, index) => (
                <Card key={index} className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-purple-600 text-sm font-medium mb-3">{item.platform}</p>
                    <p className="text-gray-600 text-sm italic leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Teachings & Practices Section */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif text-white drop-shadow-2xl">Spiritual Teachings & Practices</h2>
            </div>

            <p className="text-white text-lg mb-8 drop-shadow-xl max-w-4xl">
              These teachings have informed my work and personal growth, and can serve as starting points for your own exploration:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {teachings.map((teaching, index) => (
                <Card key={index} className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-serif text-gray-800 mb-1">
                          {teaching.title}
                          {teaching.author && <span className="text-purple-600 font-normal"> – {teaching.author}</span>}
                        </h3>
                        <a 
                          href={teaching.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 text-sm font-medium hover:text-purple-700 hover:underline inline-flex items-center gap-1 mb-3"
                        >
                          {teaching.url.replace('https://', '')}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                        <p className="text-gray-600 text-sm italic leading-relaxed">{teaching.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-white text-center italic drop-shadow-xl">
                These resources are shared for inspiration and personal exploration. They influenced my own journey, but they are not requirements or endorsements of any organization.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/25 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <Image
                    src="/images/lrc-logo.png"
                    alt="Leilany Rose Healing"
                    width={36}
                    height={36}
                    className="h-9 w-auto brightness-125 contrast-125 drop-shadow-lg"
                  />
                  <span className="text-xl font-serif text-white drop-shadow-xl font-semibold">
                    Leilany Rose Healing
                  </span>
                </div>

                <div className="flex space-x-6 text-sm text-white">
                  <Link href="/privacy" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Terms of Service
                  </Link>
                  <Link href="/#contact" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/40 text-center text-sm text-white/95">
                <p>&copy; {new Date().getFullYear()} Leilany Rose Healing. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
