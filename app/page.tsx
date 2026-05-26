"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Focus as Lotus, Moon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Violet Flame Background - Deep Amethyst to Ethereal Violet */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #602E91 0%, #8B5CF6 100%)' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-400/20 via-transparent to-transparent" />
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
                  alt="Leilany Rose Wellness"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                  Leilany Rose Wellness
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Services
                </Link>
                <Link href="/resources" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Resources
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
        <section className="relative py-32 lg:py-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10 max-w-[800px]">
                <div className="space-y-6 text-left">
                  <h1 
                    className="text-4xl lg:text-6xl font-serif font-semibold leading-tight drop-shadow-2xl"
                    style={{ color: '#FDFCF0' }}
                  >
                    Guiding women to reclaim Her power and align with Her Highest Self
                  </h1>
                  <p 
                    className="text-lg font-medium leading-[1.6] drop-shadow-xl"
                    style={{ color: 'rgba(253, 252, 240, 0.95)' }}
                  >
                    Through spiritual healing, meditation, breathwork, and trauma-informed principles, I support women
                    on their journey to wholeness, empowerment, and authentic self-expression.
                  </p>
                  <p 
                    className="text-lg font-medium leading-[1.6] drop-shadow-xl"
                    style={{ color: 'rgba(253, 252, 240, 0.95)' }}
                  >
                    I am a trauma-informed counselor-in-training at Northwestern University and a certified Breathwork
                    and Meditation instructor (1500+ hour training) through the Art of Living. I blend clinical
                    counseling with holistic energy work to create grounded, heart-centered spaces for healing and
                    empowerment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="text-center mb-20 max-w-[800px] mx-auto">
              <h2 
                className="text-3xl lg:text-4xl font-serif font-semibold mb-6 drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Holistic Services
              </h2>
              <p 
                className="text-lg font-medium leading-[1.6] drop-shadow-xl"
                style={{ color: 'rgba(253, 252, 240, 0.95)' }}
              >
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
                  <p className="text-gray-600 leading-[1.6]">
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
                  <p className="text-gray-600 leading-[1.6]">
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

              <div className="space-y-8 max-w-[800px]">
                <h2 
                  className="text-3xl lg:text-4xl font-serif font-semibold mb-6 drop-shadow-2xl text-left"
                  style={{ color: '#FDFCF0' }}
                >
                  A Bridge Between Science & Spirit
                </h2>
                <p 
                  className="text-lg font-medium leading-[1.6] mb-6 drop-shadow-xl text-left"
                  style={{ color: 'rgba(253, 252, 240, 0.95)' }}
                >
                  With a unique background spanning both scientific inquiry and spiritual practice, I bring a grounded,
                  holistic approach to healing that honors both the wisdom of ancient traditions and the insights of
                  modern trauma research.
                </p>
                <p 
                  className="text-lg font-medium leading-[1.6] mb-6 drop-shadow-xl text-left"
                  style={{ color: 'rgba(253, 252, 240, 0.95)' }}
                >
                  As a certified meditation and breathwork teacher and counselor-in-training, I'm passionate about
                  creating safe, sacred spaces where women can reconnect with their innate power, wisdom, and authentic
                  self-expression.
                </p>

                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                    <span className="drop-shadow-xl" style={{ color: '#FDFCF0' }}>Certified Meditation & Breathwork Teacher</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                    <span className="drop-shadow-xl" style={{ color: '#FDFCF0' }}>Counselor-in-Training</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                    <span className="drop-shadow-xl" style={{ color: '#FDFCF0' }}>Background in Science & Trauma-Informed Healing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }} />
                    <span className="drop-shadow-xl" style={{ color: '#FDFCF0' }}>Spiritual Healer & Guide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div 
              className="rounded-3xl p-16 border"
              style={{ 
                background: 'rgba(0, 0, 0, 0.2)', 
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <h2 
                className="text-3xl lg:text-4xl font-serif font-semibold mb-8 drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Ready to Begin Your Sacred Journey?
              </h2>
              <p 
                className="text-xl font-medium leading-[1.6] mb-10 max-w-[800px] mx-auto drop-shadow-xl"
                style={{ color: 'rgba(253, 252, 240, 0.95)' }}
              >
                Take the first step toward reclaiming your power and aligning with your highest self
              </p>
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
            <div 
              className="rounded-3xl p-16 border"
              style={{ 
                background: 'rgba(0, 0, 0, 0.2)', 
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              <h2 
                className="text-3xl lg:text-4xl font-serif font-semibold mb-8 drop-shadow-2xl"
                style={{ color: '#FDFCF0' }}
              >
                Let's Connect
              </h2>
              <p 
                className="text-lg font-medium leading-[1.6] mb-10 max-w-[800px] mx-auto drop-shadow-xl"
                style={{ color: 'rgba(253, 252, 240, 0.95)' }}
              >
                I'd love to hear from you and support you on your healing journey. Reach out to schedule a consultation
                or ask any questions.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-10">
                <div className="text-center">
                  <h3 className="font-semibold mb-2 drop-shadow-xl" style={{ color: '#D4AF37' }}>Email</h3>
                  <a
                    href="mailto:leilanyrose99@gmail.com"
                    className="transition-colors drop-shadow-lg hover:opacity-80"
                    style={{ color: '#FDFCF0' }}
                  >
                    leilanyrose99@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 drop-shadow-xl" style={{ color: '#D4AF37' }}>Phone</h3>
                  <a
                    href="tel:832-543-3985"
                    className="transition-colors drop-shadow-lg hover:opacity-80"
                    style={{ color: '#FDFCF0' }}
                  >
                    (832) 543-3985
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 drop-shadow-xl" style={{ color: '#D4AF37' }}>Instagram</h3>
                  <a
                    href="https://www.instagram.com/leilany.rose/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors drop-shadow-lg hover:opacity-80"
                    style={{ color: '#FDFCF0' }}
                  >
                    @leilany.rose
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2 drop-shadow-xl" style={{ color: '#D4AF37' }}>TikTok</h3>
                  <a
                    href="https://www.tiktok.com/@leilanyrose22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors drop-shadow-lg hover:opacity-80"
                    style={{ color: '#FDFCF0' }}
                  >
                    @leilanyrose22
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
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
                    alt="Leilany Rose Wellness"
                    width={36}
                    height={36}
                    className="h-9 w-auto brightness-125 contrast-125 drop-shadow-lg"
                  />
                  <span className="text-xl font-serif drop-shadow-xl font-semibold" style={{ color: '#FDFCF0' }}>
                    Leilany Rose Wellness
                  </span>
                </div>

                <div className="flex space-x-6 text-sm" style={{ color: '#FDFCF0' }}>
                  <Link href="/privacy" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Terms of Service
                  </Link>
                  <Link href="/contact" className="hover:opacity-80 transition-opacity drop-shadow-lg">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t text-center text-sm" style={{ borderColor: 'rgba(255, 255, 255, 0.4)', color: 'rgba(253, 252, 240, 0.95)' }}>
                <p>&copy; {new Date().getFullYear()} Leilany Rose Wellness. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
