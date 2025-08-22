import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Sparkles, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function ServicesPage() {
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
                <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </Link>
                <Link href="/services" className="text-purple-600 font-medium">
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

              <MobileMenu currentPage="services" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-serif text-white mb-6 drop-shadow-2xl">Services</h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-xl">
              My approach integrates intuitive energy practices, spiritual insight, and trauma-informed care to support
              emotional and somatic healing. Rooted in both ancient traditions and emerging research on the mind-body
              connection, each session is designed to increase self-awareness, release internal blocks, and support
              alignment with your values and authentic self.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12">
              {/* Divine Healing */}
              <Card className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                          <Sparkles className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-gray-800">Divine Healing</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-purple-600">$88</span>
                            <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
                              Limited Time Offer!
                            </span>
                            <span className="text-gray-500 line-through">(normally $125)</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Divine Healing works with the subconscious mind and Higher Self to clear the root causes of
                        imbalance—emotional, physical, energetic, or ancestral. By releasing blocks held in the body and
                        energy field, it creates space for clarity, wholeness, and deep inner alignment.
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Rooted in the spiritual law of "Ask and you shall receive," Divine Healing was developed by Dr.
                        Ahlmeirah Ariel Hallaire, a former medical doctor who transitioned from conventional medicine to
                        intuitive healing after a profound spiritual awakening.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">What do we release?</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Ancestral and genetic imprints</li>
                          <li>• Fear-based beliefs, sabotage programs, and trauma</li>
                          <li>• Blocked energy</li>
                          <li>• Stored trauma in the nervous system</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">What you may experience</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Emotional healing and peace</li>
                          <li>• Reconnection to your gifts and purpose</li>
                          <li>• Feeling empowered, aligned, and fully alive</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-gray-700 italic leading-relaxed">
                      Divine Healing is not about fixing what's broken. It's about releasing what never belonged to you
                      in the first place—so your truest self can emerge. If you're ready to shift from survival to soul
                      alignment, Divine Healing is a key that opens the door.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Image
                      src="/images/leilany-healing-session.jpeg"
                      alt="Leilany Rose performing energy healing"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-300/30">
                      <a
                        href="https://calendly.com/leilanyrose99/leilany-s-sessions?month=2025-07"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Divine Healing Session
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Soul Contract Reading */}
              <Card className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                          <Star className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-gray-800">Soul Contract Reading</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-purple-600">$96</span>
                            <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">
                              Limited Time Offer!
                            </span>
                            <span className="text-gray-500 line-through">(normally $150)</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg font-medium text-gray-800 mb-4">
                        Decode the spiritual blueprint of your life
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Soul Contract Readings decode the sound vibrations of your birth name using the 22-letter Hebrew
                        alphabet—each with its own energetic frequency. It reveals the deeper life patterns behind your
                        challenges, gifts, and purpose—bringing clarity if you feel blocked or know you're meant for
                        something more.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Through your Soul Contract chart, you will:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Discover the deeper meaning behind your challenges</li>
                        <li>• Reconnect with your soul gifts and natural talents</li>
                        <li>• Gain clarity on your life purpose and soul destiny</li>
                        <li>• Learn how to align your energy to manifest your dreams</li>
                        <li>• Improve your relationships through deeper understanding</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Image
                      src="/images/leilany-consultation.png"
                      alt="Leilany Rose during a soul contract consultation"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-md mx-auto"
                    />
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-300/30">
                      <a
                        href="https://calendly.com/leilanyrose99/soul-contract-reading?month=2025-07"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Soul Contract Reading
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Soul Contract Relationship Reading */}
              <Card className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-gray-800">Soul Contract Relationship Reading</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg text-gray-600">Add-on session – 30 minutes</span>
                            <span className="text-2xl font-bold text-purple-600">+$50</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        This is a follow-up to the foundational Soul Contract Reading, offering a deeper look at how
                        your relationships have shaped your life path.
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        We'll explore how the different names you've used throughout your life —names of significant
                        people (like partners, family members, or mentors) — have influenced your life. This helps
                        reveal patterns and repeating themes in your relationships and how they've influenced your
                        personal growth and soul's direction.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Together, we'll look at:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• The energetic influence of past and current relationships</li>
                          <li>• How name changes may have shifted or activated different parts of your life path</li>
                          <li>• Key lessons your soul has been working through in connection with others</li>
                          <li>• The deeper meaning behind relationship patterns or dynamics that keep repeating</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-violet-50 rounded-lg">
                        <p className="text-gray-700 leading-relaxed">
                          This session can help bring clarity, closure, or new understanding to the relationships that
                          have impacted you most — and how they've played a role in your soul's unfolding.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-300/30">
                      <a
                        href="https://calendly.com/leilanyrose99/soul-contract-relationship-session?month=2025-08"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Relationship Reading
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Holy Fire Reiki */}
              <Card className="border-white/20 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                          <Heart className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif text-gray-800">Holy Fire® Reiki</h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-purple-600">$50</span>
                            <span className="text-gray-600">for 30 min</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Holy Fire® Reiki is a gentle, restorative healing modality that supports emotional, physical,
                        and energetic well-being. Research shows Reiki activates the parasympathetic nervous system,
                        helping reduce stress, pain, and anxiety.
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        As an evolution of traditional Usui Reiki, Holy Fire® channels a refined energy that works with
                        your inner wisdom to support healing, clarity, and spiritual alignment.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">What You May Experience:</h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Inner peace, greater clarity, and emotional resilience</li>
                          <li>• Realignment of your energy field to support healing, balance, and spiritual growth</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">
                          Holy Fire® Reiki is ideal for those who feel called to:
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Deepen their spiritual practice</li>
                          <li>• Awaken their heart center</li>
                          <li>• Heal at a root level and reclaim their light</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <p className="text-gray-700 italic leading-relaxed">
                      This energy is felt as both powerful and gentle, often bringing a profound sense of peace,
                      lightness, and connection to the divine.
                    </p>
                  </div>

                  <div className="mt-6">
                    <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg shadow-violet-300/30">
                      <a
                        href="https://calendly.com/leilanyrose99/reiki-session"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Reiki Session
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
              <div className="bg-black/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                <h2 className="text-3xl font-serif text-white mb-4 drop-shadow-2xl">
                  Ready to Begin Your Healing Journey?
                </h2>
                <p className="text-lg text-white mb-6 max-w-2xl mx-auto drop-shadow-xl">
                  Each session is a sacred space for transformation. Contact me to discuss which service feels most
                  aligned for you.
                </p>
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-purple-800 hover:bg-gray-50 shadow-2xl shadow-black/50 font-semibold"
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
          </div>
        </section>
      </div>
    </div>
  )
}
