import { Button } from "@/components/ui/button"
import { BookOpen, Film, Sparkles, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

// Gold Sparkle Icon Component
function GoldSparkle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#D4AF37" />
      <path d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z" fill="#D4AF37" opacity="0.7" />
      <path d="M5 15L5.5 16.5L7 17L5.5 17.5L5 19L4.5 17.5L3 17L4.5 16.5L5 15Z" fill="#D4AF37" opacity="0.5" />
    </svg>
  )
}

// Sacred Geometry Flower of Life SVG
function FlowerOfLife() {
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 400" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.05 }}
    >
      <circle cx="200" cy="200" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="200" cy="150" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="200" cy="250" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="243" cy="175" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="243" cy="225" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="157" cy="175" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="157" cy="225" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="200" cy="100" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="200" cy="300" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="286" cy="150" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="286" cy="250" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="114" cy="150" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="114" cy="250" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="243" cy="125" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="243" cy="275" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="157" cy="125" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="157" cy="275" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="286" cy="200" r="50" stroke="white" strokeWidth="1" fill="none" />
      <circle cx="114" cy="200" r="50" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function ResourcesPage() {
  const books = [
    {
      title: "Unveiled Mysteries",
      author: "Godfre Ray King",
      description: "Guide to spiritual laws, self-mastery, and personal transformation, showing how to connect with your Divine Self.",
      featured: true,
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

  // Glassmorphism card style
  const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  }

  // Hover glow style
  const hoverGlowClass = "transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3),0_0_20px_rgba(212,175,55,0.2)]"

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Violet Flame Background - Deep Amethyst to Ethereal Violet */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #602E91 0%, #8B5CF6 100%)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-400/20 via-transparent to-transparent" />
        {/* Sacred Geometry Watermark */}
        <FlowerOfLife />
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
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl lg:text-5xl font-serif font-semibold mb-8 drop-shadow-2xl"
              style={{ color: '#FDFCF0' }}
            >
              Explore & Learn
            </h1>
            <p 
              className="text-xl leading-[1.6] max-w-3xl mx-auto drop-shadow-xl"
              style={{ color: 'rgba(253, 252, 240, 0.95)' }}
            >
              These books, teachings, and media have inspired my spiritual journey. They explore self-mastery, consciousness, and awakening, and are accessible to anyone beginning their path.
            </p>
          </div>
        </section>

        {/* Books & Writings Section */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-10">
              <GoldSparkle />
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={glassCardStyle}
              >
                <BookOpen className="h-6 w-6" style={{ color: '#D4AF37' }} />
              </div>
              <h2 
                className="text-3xl font-serif font-semibold drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Books & Writings
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-6 ${hoverGlowClass} ${book.featured ? 'md:col-span-2 flex gap-6' : ''}`}
                  style={glassCardStyle}
                >
                  {book.featured && (
                    <div 
                      className="hidden md:flex w-32 h-44 rounded-lg items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      <BookOpen className="h-12 w-12" style={{ color: 'rgba(212, 175, 55, 0.6)' }} />
                    </div>
                  )}
                  <div className={book.featured ? 'flex-1' : ''}>
                    <h3 
                      className="text-lg font-serif font-semibold mb-1"
                      style={{ color: '#FDFCF0' }}
                    >
                      {book.title}
                    </h3>
                    <p 
                      className="text-sm font-medium mb-3"
                      style={{ color: '#D4AF37' }}
                    >
                      {book.author}
                    </p>
                    <p 
                      className="text-sm italic leading-relaxed"
                      style={{ color: 'rgba(253, 252, 240, 0.85)' }}
                    >
                      {book.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media & Inspiration Section */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-10">
              <GoldSparkle />
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={glassCardStyle}
              >
                <Film className="h-6 w-6" style={{ color: '#D4AF37' }} />
              </div>
              <h2 
                className="text-3xl font-serif font-semibold drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Media & Inspiration
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-6 ${hoverGlowClass}`}
                  style={glassCardStyle}
                >
                  <h3 
                    className="text-lg font-serif font-semibold mb-1"
                    style={{ color: '#FDFCF0' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-sm font-medium mb-3"
                    style={{ color: '#D4AF37' }}
                  >
                    {item.platform}
                  </p>
                  <p 
                    className="text-sm italic leading-relaxed"
                    style={{ color: 'rgba(253, 252, 240, 0.85)' }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spiritual Teachings & Practices Section */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-6">
              <GoldSparkle />
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={glassCardStyle}
              >
                <Sparkles className="h-6 w-6" style={{ color: '#D4AF37' }} />
              </div>
              <h2 
                className="text-3xl font-serif font-semibold drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Spiritual Teachings & Practices
              </h2>
            </div>

            <p 
              className="text-lg mb-10 drop-shadow-xl max-w-4xl"
              style={{ color: 'rgba(253, 252, 240, 0.95)' }}
            >
              These teachings have informed my work and personal growth, and can serve as starting points for your own exploration:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {teachings.map((teaching, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl p-6 ${hoverGlowClass}`}
                  style={glassCardStyle}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 
                        className="text-lg font-serif font-semibold mb-1"
                        style={{ color: '#FDFCF0' }}
                      >
                        {teaching.title}
                        {teaching.author && (
                          <span style={{ color: '#D4AF37' }}> – {teaching.author}</span>
                        )}
                      </h3>
                      <a 
                        href={teaching.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:opacity-80 inline-flex items-center gap-1 mb-3 transition-opacity"
                        style={{ color: '#D4AF37' }}
                      >
                        {teaching.url.replace('https://', '')}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <p 
                        className="text-sm italic leading-relaxed"
                        style={{ color: 'rgba(253, 252, 240, 0.85)' }}
                      >
                        {teaching.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div 
              className="mt-16 p-8 rounded-2xl"
              style={glassCardStyle}
            >
              <p 
                className="text-center italic drop-shadow-xl"
                style={{ color: 'rgba(253, 252, 240, 0.9)' }}
              >
                These resources are shared for inspiration and personal exploration. They influenced my own journey, but they are not requirements or endorsements of any organization.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="rounded-2xl p-10 border shadow-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.25)', 
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.4)'
              }}
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <Image
                    src="/images/lrc-logo.png"
                    alt="Leilany Rose Healing"
                    width={36}
                    height={36}
                    className="h-9 w-auto brightness-125 contrast-125 drop-shadow-lg"
                  />
                  <span className="text-xl font-serif drop-shadow-xl font-semibold" style={{ color: '#FDFCF0' }}>
                    Leilany Rose Healing
                  </span>
                </div>

                <div className="flex space-x-6 text-sm" style={{ color: '#FDFCF0' }}>
                  <Link href="/privacy" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Terms of Service
                  </Link>
                  <Link href="/#contact" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Contact
                  </Link>
                </div>
              </div>

              <div 
                className="mt-8 pt-8 border-t text-center text-sm" 
                style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: 'rgba(253, 252, 240, 0.95)' }}
              >
                <p>&copy; {new Date().getFullYear()} Leilany Rose Healing. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
