import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
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
            {/* Quote */}
            <div className="text-center mb-8 bg-white/10 border border-white/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <p className="text-xl font-serif text-amber-50 drop-shadow-2xl italic">
                {'"Keep your mind clear and your heart open so that you can hear your truth"'}
              </p>
              <p className="text-lg font-serif text-amber-100/80 drop-shadow-xl mt-3">— Kuan Yin</p>
            </div>

            {/* Welcome Message */}
            <div className="text-center mb-12">
              <p className="text-xl font-serif text-white drop-shadow-2xl italic">
                Hello beautiful soul! If you are reading this, know you are exactly where you are meant to be
              </p>
            </div>

            {/* Content with Image and Text Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
                <p className="text-lg drop-shadow-xl">
                  I am a certified healer, meditation and breathwork instructor, and counselor-in-training, earning my
                  Master of Arts in Counseling at Northwestern University. I also have a background in Molecular Biology
                  and Clinical Psychology, but the heart of my story is my lived experience.
                </p>

                <p className="text-lg drop-shadow-xl">
                  {"I've carried the weight of trauma and suppression, shaped by patriarchy and culture, and done the hard, messy work of reclaiming myself. Growing up in a traditional Korean household, being a girl meant staying quiet, staying small, and not taking up space. Beneath that silence, I carried the hidden impact of childhood sexual abuse\u2014wounds that shook my confidence, my body, and my sense of worth - challenging everything I thought I knew about myself."}
                </p>
              </div>
            </div>

            {/* Continued Text Content */}
            <div className="prose prose-lg max-w-none text-white leading-relaxed space-y-6 mt-6">
              <p className="text-lg drop-shadow-xl">
                For years, I searched for confidence and self-worth in books, podcasts, and personal growth programs.
                But real healing does not come from pages or podcasts. It began when I stopped running from myself and
                faced what I had buried for so long.
              </p>
              <p className="text-lg drop-shadow-xl">
                {"I discovered meditation in 2020, and it changed everything. In 2022, I completed a 1,500+ hour yoga teacher training through the Art of Living and spent a year living in an Ashram teaching Sudarshan Kriya. Spirit guided me to follow my own inner teacher and leave the Ashram, and shortly after, I had a profound spiritual awakening that led me to the teachings of the Ascended Masters. Their wisdom taught me that true spiritual growth comes from curiosity, presence, and self-mastery. The divine lives within each of us, available whenever we open to love, release judgment, and follow our inner guidance."}
              </p>

              <p className="text-lg drop-shadow-xl">
                {"Since then, I've expanded my practice to include trauma-informed spirituality, energy healing, Holy Fire\u00AE Reiki, Divine Healing, and Soul Contract Readings. I blend these tools with evidence-based insight to support women in reconnecting with their bodies, reclaiming their voices, and stepping into their power."}
              </p>

              <p className="text-lg drop-shadow-xl">
                {"This work is my life\u2019s purpose. I know what it feels like to believe you are broken\u2014and I also know the deeper truth: you are not."}
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
                    className="h-8 w-auto brightness-125 contrast-125 drop-shadow-lg"
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
