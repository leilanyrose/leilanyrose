import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Focus as Lotus, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
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
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Services
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
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

              <MobileMenu currentPage="home" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-serif leading-tight text-white drop-shadow-2xl">
                    Guiding women to reclaim Her power and align with Her Highest Self
                  </h1>
                  <p className="text-lg text-white leading-relaxed drop-shadow-xl">
                    Through spiritual healing, meditation, breathwork, and trauma-informed principles, I support women
                    on their journey to wholeness, empowerment, and authentic self-expression.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-purple-800 hover:bg-gray-50 px-8 shadow-2xl shadow-black/50 font-semibold"
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
                  className="rounded-2xl shadow-2xl shadow-black/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4 drop-shadow-2xl">Holistic Services</h2>
              <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-xl">
                Holistic healing modalities rooted in ancient wisdom and modern science
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-white/20 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-800 mb-4">Spiritual Healing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Energy healing sessions to release blocks, restore balance, and reconnect with your inner wisdom and
                    divine feminine essence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lotus className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-800 mb-4">Meditation & Breathwork</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Certified guidance in meditation and breathwork practices to cultivate presence, reduce stress, and
                    access deeper states of consciousness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Moon className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-800 mb-4">Group Work</h3>
                  <p className="text-gray-600 leading-relaxed">
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
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/leilany-heart-centered.webp"
                  alt="Leilany Rose in heart-centered healing practice"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-xl shadow-black/40"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4 drop-shadow-2xl">
                  A Bridge Between Science & Spirit
                </h2>
                <p className="text-white leading-relaxed mb-6 drop-shadow-xl">
                  With a unique background spanning both scientific inquiry and spiritual practice, I bring a grounded,
                  holistic approach to healing that honors both the wisdom of ancient traditions and the insights of
                  modern trauma research.
                </p>
                <p className="text-white leading-relaxed mb-6 drop-shadow-xl">
                  As a certified meditation and breathwork teacher and counselor-in-training, I'm passionate about
                  creating safe, sacred spaces where women can reconnect with their innate power, wisdom, and authentic
                  self-expression.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white drop-shadow-xl">Certified Meditation & Breathwork Teacher</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white drop-shadow-xl">Counselor-in-Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white drop-shadow-xl">Background in Science & Trauma-Informed Healing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white drop-shadow-xl">Spiritual Healer & Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 drop-shadow-2xl">
                Ready to Begin Your Sacred Journey?
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed drop-shadow-xl">
                Take the first step toward reclaiming your power and aligning with your highest self
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-800 hover:bg-gray-50 px-8 py-3 text-lg shadow-2xl shadow-black/30 font-semibold"
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
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
              <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6 drop-shadow-2xl">Let's Connect</h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto drop-shadow-xl">
                I'd love to hear from you and support you on your healing journey. Reach out to schedule a consultation
                or ask any questions.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Email</h3>
                  <a
                    href="mailto:leilanyrose99@gmail.com"
                    className="text-white hover:text-gray-200 transition-colors drop-shadow-lg"
                  >
                    leilanyrose99@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Phone</h3>
                  <a
                    href="tel:832-543-3985"
                    className="text-white hover:text-gray-200 transition-colors drop-shadow-lg"
                  >
                    (832) 543-3985
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">Instagram</h3>
                  <a
                    href="https://www.instagram.com/leilany.rose/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors drop-shadow-lg"
                  >
                    @leilany.rose
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-white mb-2 drop-shadow-xl">TikTok</h3>
                  <a
                    href="https://www.tiktok.com/@leilanyrose22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition-colors drop-shadow-lg"
                  >
                    @leilanyrose22
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-white text-purple-800 hover:bg-gray-50 shadow-2xl shadow-black/30 font-semibold"
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
        <footer className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <Image
                    src="/images/lrc-logo.png"
                    alt="Leilany Rose Healing"
                    width={24}
                    height={24}
                    className="h-6 w-auto"
                  />
                  <span className="text-lg font-serif text-white drop-shadow-xl">Leilany Rose Healing</span>
                </div>

                <div className="flex space-x-6 text-sm text-white">
                  <Link href="/privacy" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="hover:text-gray-200 transition-colors drop-shadow-lg">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/90">
                <p>&copy; {new Date().getFullYear()} Leilany Rose Healing. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
