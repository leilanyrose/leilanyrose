import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Focus as Lotus, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Full Violet Flame Background - Sophisticated Gradient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #602E91 0%, #8B5CF6 100%)' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-violet-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      </div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
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
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/resources" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Resources
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Connect
                </Link>
                <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg shadow-violet-300/50">
                  <a
                    href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Free Connection Call
                  </a>
                </Button>
              </div>

              <MobileMenu currentPage="home" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 max-w-[800px]">
                <div className="space-y-6 text-left">
                  <h1 className="text-4xl lg:text-6xl font-serif font-semibold leading-tight text-white drop-shadow-2xl tracking-tight">
                    Guiding women to reclaim Her power and align with Her Highest Self
                  </h1>
                  <p className="text-lg text-white/95 leading-[1.6] drop-shadow-xl font-medium" style={{ WebkitFontSmoothing: 'antialiased' }}>
                    Through spiritual healing, meditation, breathwork, and trauma-informed principles, I support women
                    on their journey to wholeness, empowerment, and authentic self-expression.
                  </p>
                  <p className="text-lg text-white/95 leading-[1.6] drop-shadow-xl font-medium" style={{ WebkitFontSmoothing: 'antialiased' }}>
                    I am a trauma-informed counselor-in-training at Northwestern University and a certified Breathwork
                    and Meditation instructor (1500+ hour training) through the Art of Living. I blend clinical
                    counseling with holistic energy work to create grounded, heart-centered spaces for healing and
                    empowerment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="gold-cta px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl"
                    style={{ background: '#D4AF37', color: '#301934' }}
                  >
                    <a
                      href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Begin Your Journey
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/leilany-photo.jpg"
                  alt="Leilany Rose - Spiritual Healer and Guide"
                  width={500}
                  height={600}
                  className="shadow-2xl shadow-black/40"
                  style={{ borderRadius: '24px' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mb-16 max-w-[800px]">
              <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-white mb-6 drop-shadow-2xl tracking-tight">Holistic Services</h2>
              <p className="text-lg text-white/95 leading-[1.6] drop-shadow-xl font-medium">
                Holistic healing modalities rooted in ancient wisdom and modern science
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-white/20 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-[1.02]">
                <CardContent className="p-10 text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mb-8">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Spiritual Healing</h3>
                  <p className="text-gray-600 leading-[1.6]">
                    Energy healing sessions to release blocks, restore balance, and reconnect with your inner wisdom and
                    divine feminine essence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-[1.02]">
                <CardContent className="p-10 text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mb-8">
                    <Lotus className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Meditation & Breathwork</h3>
                  <p className="text-gray-600 leading-[1.6]">
                    Certified guidance in meditation and breathwork practices to cultivate presence, reduce stress, and
                    access deeper states of consciousness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-[1.02]">
                <CardContent className="p-10 text-left">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mb-8">
                    <Moon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Group Work</h3>
                  <p className="text-gray-600 leading-[1.6]">
                    Sacred spaces for healing in community. These intimate group offerings will include guided
                    practices, sharing circles, and soul-nourishing support for women on the path of empowerment and
                    embodiment. (Coming soon)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image
                  src="/images/leilany-heart-centered.webp"
                  alt="Leilany Rose in heart-centered healing practice"
                  width={400}
                  height={500}
                  className="shadow-xl shadow-black/40"
                  style={{ borderRadius: '24px' }}
                />
              </div>

              <div className="space-y-8 text-left max-w-[800px]">
                <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-white mb-6 drop-shadow-2xl tracking-tight">
                  A Bridge Between Science & Spirit
                </h2>
                <p className="text-white/95 leading-[1.6] text-lg drop-shadow-xl font-medium">
                  With a unique background spanning both scientific inquiry and spiritual practice, I bring a grounded,
                  holistic approach to healing that honors both the wisdom of ancient traditions and the insights of
                  modern trauma research.
                </p>
                <p className="text-white/95 leading-[1.6] text-lg drop-shadow-xl font-medium">
                  As a certified meditation and breathwork teacher and counselor-in-training, I am passionate about
                  creating safe, sacred spaces where women can reconnect with their innate power, wisdom, and authentic
                  self-expression.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#D4AF37' }}></div>
                    <span className="text-white/95 drop-shadow-xl font-medium">Certified Meditation & Breathwork Teacher</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#D4AF37' }}></div>
                    <span className="text-white/95 drop-shadow-xl font-medium">Counselor-in-Training</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#D4AF37' }}></div>
                    <span className="text-white/95 drop-shadow-xl font-medium">Background in Science & Trauma-Informed Healing</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full" style={{ background: '#D4AF37' }}></div>
                    <span className="text-white/95 drop-shadow-xl font-medium">Spiritual Healer & Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-16 border border-white/20">
              <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-white mb-8 drop-shadow-2xl tracking-tight">
                Ready to Begin Your Sacred Journey?
              </h2>
              <p className="text-xl text-white/95 mb-10 leading-[1.6] drop-shadow-xl font-medium max-w-[800px] mx-auto">
                Take the first step toward reclaiming your power and aligning with your highest self
              </p>
              <Button
                size="lg"
                className="gold-cta px-12 py-6 text-lg font-semibold rounded-xl shadow-2xl"
                style={{ background: '#D4AF37', color: '#301934' }}
              >
                <a
                  href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Session Today
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-16 border border-white/20">
              <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-white mb-8 drop-shadow-2xl tracking-tight">Let&apos;s Connect</h2>
              <p className="text-lg text-white/95 mb-12 max-w-2xl mx-auto drop-shadow-xl leading-[1.6] font-medium">
                I&apos;d love to hear from you and support you on your healing journey. Reach out to schedule a consultation
                or ask any questions.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Email</h3>
                  <a
                    href="mailto:leilanyrose99@gmail.com"
                    className="text-white/90 hover:text-white transition-colors drop-shadow-lg"
                  >
                    leilanyrose99@gmail.com
                  </a>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Phone</h3>
                  <a
                    href="tel:832-543-3985"
                    className="text-white/90 hover:text-white transition-colors drop-shadow-lg"
                  >
                    (832) 543-3985
                  </a>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Instagram</h3>
                  <a
                    href="https://www.instagram.com/leilany.rose/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors drop-shadow-lg"
                  >
                    @leilany.rose
                  </a>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">TikTok</h3>
                  <a
                    href="https://www.tiktok.com/@leilanyrose22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white transition-colors drop-shadow-lg"
                  >
                    @leilanyrose22
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="gold-cta px-10 py-6 text-lg font-semibold rounded-xl shadow-2xl"
                  style={{ background: '#D4AF37', color: '#301934' }}
                >
                  <a
                    href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-10 border border-white/30 shadow-lg">
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

                <div className="flex space-x-8 text-sm text-white/90">
                  <Link href="/privacy" className="hover:text-white transition-colors drop-shadow-lg">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-white transition-colors drop-shadow-lg">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="hover:text-white transition-colors drop-shadow-lg">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-white/30 text-center text-sm text-white/90">
                <p>&copy; {new Date().getFullYear()} Leilany Rose Healing. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
