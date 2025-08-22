import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Full Violet Flame Background */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/violet-flame-full-background.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/70 via-purple-900/60 to-violet-900/70"></div>
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
                <Link href="/about" className="text-purple-600 font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Services
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

              <MobileMenu currentPage="about" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 drop-shadow-2xl">About Me</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="relative">
                <Image
                  src="/images/leilany-nature.png"
                  alt="Leilany Rose connecting with nature"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl shadow-black/40"
                />
              </div>

              <div className="space-y-6 text-white leading-relaxed">
                <p className="drop-shadow-xl">
                  I am a certified healer, meditation and breathwork instructor, and counselor-in-training with a
                  background in Molecular Biology and Clinical Psychology. I am currently earning my Master of Arts in
                  Counseling at Northwestern University.
                </p>

                <p className="drop-shadow-xl">
                  But more than that, I am someone who has lived through suppression and trauma—shaped by patriarchy,
                  silenced by culture—and done the hard, messy work of healing.
                </p>

                <p className="drop-shadow-xl">
                  I grew up in a traditional Korean household, where being a girl meant following unspoken rules: stay
                  quiet, stay small, do not take up space. Beneath that silence, I carried the hidden weight of
                  childhood sexual abuse—wounds I would not fully understand until many years later.
                </p>

                <p className="drop-shadow-xl">
                  For years, I searched for confidence, love, and self-worth in self-help books, podcasts, and personal
                  transformation courses. But healing did not come from pages or programs. It came from within—when I
                  finally stopped running from myself and began facing what I had buried for years.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-white leading-relaxed space-y-6">
              <p className="drop-shadow-xl">
                In 2020, I found stillness through meditation, and that stillness changed everything. I immersed myself
                in practices like Shambhavi Mahamudra Kriya and Sudarshan Kriya, completing a 1,500-hour yoga teacher
                training in the Blue Ridge Mountains. From that foundation, I began guiding others—offering breathwork
                and meditation not only as stress relief, but as pathways to resilience, reconnection, and awakening.
              </p>

              <p className="drop-shadow-xl">
                My calling deepened into integrating energy work, trauma-informed spirituality, and intuitive healing. I
                trained in Holy Fire® Reiki, Divine Healing, Soul Contract Readings, and other mind-body-spirit
                modalities—each helping me reclaim the parts of myself I had once exiled: my power, my voice, my truth.
              </p>

              <p className="drop-shadow-xl">
                Now, I walk alongside women who have survived by abandoning themselves—those who have dimmed their
                light, masked their pain, or forgotten how to trust their inner voice. Through a blend of evidence-based
                insight and soul-aligned healing, I help them return home to themselves.
              </p>

              <p className="drop-shadow-xl">
                This work is my life's purpose. Because I know what it is like to feel broken—and I also know that you
                are not.
              </p>

              <div className="text-center py-8">
                <p className="text-xl font-serif text-white mb-2 drop-shadow-2xl">You are whole.</p>
                <p className="text-xl font-serif text-white mb-2 drop-shadow-2xl">You are powerful.</p>
                <p className="text-xl font-serif text-white mb-6 drop-shadow-2xl">
                  And you do not have to walk this path alone.
                </p>
                <p className="text-lg font-serif text-white mb-12 drop-shadow-2xl">I AM here to walk with you.</p>
                <p className="text-lg font-serif italic text-white drop-shadow-2xl">With love and light,</p>
                <p className="text-lg font-serif italic text-white mb-4 drop-shadow-2xl">Leilany Rose Calataya</p>
                <div className="flex justify-center">
                  <Image
                    src="/images/lrc-logo.png"
                    alt="Leilany Rose Healing Logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto brightness-75 contrast-125"
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-gray-50 px-8 shadow-2xl shadow-black/50 font-semibold"
                >
                  Explore My Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
