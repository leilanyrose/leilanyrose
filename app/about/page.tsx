import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

// Gold Sparkle Icon Component
function GoldSparkle() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#D4AF37" />
      <path d="M19 15L19.75 17.25L22 18L19.75 18.75L19 21L18.25 18.75L16 18L18.25 17.25L19 15Z" fill="#D4AF37" opacity="0.7" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Vertical Gradient Background - Darker Amethyst at top to Vibrant Violet */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #4A2070 0%, #602E91 30%, #8B5CF6 100%)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-400/15 via-transparent to-transparent" />
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
                <Link href="/resources" className="text-gray-700 hover:text-purple-600 transition-colors">
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

              <MobileMenu currentPage="about" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 
              className="text-4xl lg:text-5xl font-serif font-semibold mb-6 drop-shadow-2xl"
              style={{ color: '#FDFCF0' }}
            >
              About Me
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quote */}
            <div className="text-center py-24">
              <p 
                className="text-2xl md:text-3xl font-serif-body font-normal drop-shadow-2xl leading-[1.8] tracking-[0.01em]"
                style={{ color: '#FDFCF0' }}
              >
                Keep your mind clear and your heart open,
                <br />
                so you can hear your truth.
              </p>
              <p 
                className="text-base md:text-lg font-serif-body font-normal drop-shadow-xl mt-8 tracking-[0.01em]"
                style={{ color: '#D4AF37' }}
              >
                — Kuan Yin
              </p>
            </div>

            {/* Welcome Message */}
            <div className="text-center mb-12">
              <p 
                className="text-xl font-serif-body drop-shadow-2xl leading-[1.8] tracking-[0.01em]"
                style={{ color: '#FDFCF0' }}
              >
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
                  className="shadow-xl"
                  style={{ 
                    borderRadius: '16px',
                    boxShadow: 'inset 0 2px 20px rgba(0,0,0,0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                  }}
                />
              </div>

              <div className="space-y-6 leading-[1.8] tracking-[0.01em]">
                <p 
                  className="text-lg font-serif-body drop-shadow-xl"
                  style={{ color: '#FDFCF0' }}
                >
                  {"I am a certified healer, meditation and breathwork instructor, and counselor-in-training, earning my MA in Counseling at Northwestern University. I also have a background in Molecular Biology and Clinical Psychology, but the heart of my story is my lived experience. I've done the hard, messy work of reclaiming myself and my power."}
                </p>

                <p 
                  className="text-lg font-serif-body drop-shadow-xl"
                  style={{ color: '#FDFCF0' }}
                >
                  {"As a Korean woman, I grew up navigating a culture where girls are taught to be quiet, respectful, and compliant. As a child, I survived rape by a trusted authority, which left me feeling silenced, powerless, and unworthy. That experience deeply shaped how I related to my body, intimacy, self-expression, and safety. For years, I carried that pain into many areas of my life—my relationships, my sense of self, and my connection to my body felt fractured."}
                </p>
              </div>
            </div>

            {/* Continued Text Content */}
            <div className="space-y-6 mt-8 leading-[1.8] tracking-[0.01em]">
              <p 
                className="text-lg font-serif-body drop-shadow-xl"
                style={{ color: '#FDFCF0' }}
              >
                {"For a long time, I searched for confidence, love, and self-worth in books, counseling, podcasts, and personal growth programs. True healing, however, didn't come from pages or courses—it began when I stopped running from myself and faced what I had buried for so long."}
              </p>

              <p 
                className="text-lg font-serif-body drop-shadow-xl"
                style={{ color: '#FDFCF0' }}
              >
                {"In 2020, I discovered breathwork and meditation through the Art of Living, which became a turning point in my life. I went on to explore practices including Isha Kriya and Shambhavi Mahamudra Kriya, deepening my understanding of breath, energy, and mindfulness. In 2022, I completed a 1,500+ hour yoga teacher training and spent a year living in an ashram, where I taught Sudarshan Kriya Yoga (a powerful breath-based meditation) to hundreds of people."}
              </p>

              <p 
                className="text-lg font-serif-body drop-shadow-xl"
                style={{ color: '#FDFCF0' }}
              >
                {"I eventually felt called to leave the ashram and step into my own path. During this time, I experienced a profound spiritual awakening that led to an immersive period of study, meditation, and energy practice based on the teachings of the Ascended Masters. Through this journey, I discovered that true growth requires presence, self-mastery, and inner responsibility—lessons I now bring into my healing work with women reclaiming their power and voice."}
              </p>

              <p 
                className="text-lg font-serif-body drop-shadow-xl"
                style={{ color: '#FDFCF0' }}
              >
                {"Inspired by this awakening, I began building my own healing practice, blending trauma-informed spirituality with intuitive, energy-based healing, while drawing from my training in counseling and psychology. My work helps women reconnect with their bodies, reclaim their voices, and step into their power."}
              </p>

              {/* Pull Quote - Styled larger, centered, italic */}
              <div className="py-10">
                <p 
                  className="text-xl md:text-2xl font-serif-body italic text-center drop-shadow-2xl leading-[1.8]"
                  style={{ color: '#FDFCF0' }}
                >
                  {"This is my life's purpose. I know what it feels like to believe you are broken—and I also know the deeper truth: you are not."}
                </p>
              </div>

              {/* Affirmations in Glassmorphism Container */}
              <div 
                className="text-center py-10 px-8 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <p 
                  className="text-xl font-serif mb-3 drop-shadow-2xl"
                  style={{ color: '#D4AF37', letterSpacing: '0.1em' }}
                >
                  You are whole.
                </p>
                <p 
                  className="text-xl font-serif mb-3 drop-shadow-2xl"
                  style={{ color: '#D4AF37', letterSpacing: '0.1em' }}
                >
                  You are powerful.
                </p>
                <p 
                  className="text-xl font-serif mb-8 drop-shadow-2xl"
                  style={{ color: '#D4AF37', letterSpacing: '0.1em' }}
                >
                  And you do not have to walk this path alone.
                </p>
                <p 
                  className="text-lg font-serif drop-shadow-2xl"
                  style={{ color: '#D4AF37', letterSpacing: '0.05em' }}
                >
                  I AM here to walk with you.
                </p>
              </div>

              {/* Signature Section */}
              <div className="text-center pt-12">
                <p 
                  className="text-lg font-serif-body italic drop-shadow-2xl mb-2"
                  style={{ color: '#D4AF37' }}
                >
                  With love and light,
                </p>
                <p 
                  className="text-2xl font-script drop-shadow-2xl mb-6"
                  style={{ color: '#D4AF37' }}
                >
                  Leilany Rose Calataya
                </p>
                <div className="flex justify-center">
                  <GoldSparkle />
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link href="/services">
                <Button
                  size="lg"
                  className="px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: '#D4AF37', 
                    color: '#301934',
                    boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(139, 92, 246, 0.5), 0 4px 20px rgba(212, 175, 55, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)'
                  }}
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
