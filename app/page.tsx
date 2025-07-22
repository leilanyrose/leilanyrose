import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, NotebookIcon as Lotus, Moon, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-violet-50 relative">
      {/* Violet Flame Background */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/violet-flame-background.png" alt="" fill className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/40 via-purple-50/40 to-violet-50/40"></div>
      </div>

      {/* All content with relative positioning */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-purple-100">
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

              <div className="md:hidden">
                <Menu className="h-6 w-6 text-gray-700" />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-serif leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                    Guiding women to reclaim Her power and align with Her Highest Self
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Through spiritual healing, meditation, breathwork, and trauma-informed principles, I support women
                    on their journey to wholeness, empowerment, and authentic self-expression.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white px-8 shadow-lg shadow-violet-300/30"
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
                  className="rounded-2xl shadow-2xl shadow-violet-200/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4">Holistic Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Holistic healing modalities rooted in ancient wisdom and modern science
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
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

              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
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

              <Card className="border-purple-100 hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
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
        <section id="about" className="py-20 bg-gradient-to-r from-purple-50/70 to-violet-50/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/images/leilany-heart-centered.webp"
                  alt="Leilany Rose in heart-centered healing practice"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-xl shadow-violet-200/30"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4">
                  A Bridge Between Science & Spirit
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With a unique background spanning both scientific inquiry and spiritual practice, I bring a grounded,
                  holistic approach to healing that honors both the wisdom of ancient traditions and the insights of
                  modern trauma research.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As a certified meditation and breathwork teacher and counselor-in-training, I'm passionate about
                  creating safe, sacred spaces where women can reconnect with their innate power, wisdom, and authentic
                  self-expression.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Certified Meditation & Breathwork Teacher</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Counselor-in-Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Background in Science & Trauma-Informed Healing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Spiritual Healer & Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-white mb-6">Ready to Begin Your Sacred Journey?</h2>
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">
              Take the first step toward reclaiming your power and aligning with your highest self
            </p>
            <Button
              size="lg"
              className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 text-lg shadow-lg shadow-violet-300/30"
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
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white/70 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'd love to hear from you and support you on your healing journey. Reach out to schedule a consultation or
              ask any questions.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <a href="mailto:leilanyrose99@gmail.com" className="text-purple-600 hover:text-purple-700">
                  leilanyrose99@gmail.com
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <a href="tel:832-543-3985" className="text-purple-600 hover:text-purple-700">
                  (832) 543-3985
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/leilany.rose/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                >
                  @leilany.rose
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 mb-2">TikTok</h3>
                <a
                  href="https://www.tiktok.com/@leilanyrose22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700"
                >
                  @leilanyrose22
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-300/30"
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
        </section>

        {/* Footer */}
        <footer className="bg-gray-50/80 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Image
                  src="/images/lrc-logo.png"
                  alt="Leilany Rose Healing"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-lg font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                  Leilany Rose Healing
                </span>
              </div>

              <div className="flex space-x-6 text-sm text-gray-600">
                <Link href="/privacy" className="hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-purple-600 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} Leilany Rose Healing. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
