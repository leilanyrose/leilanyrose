import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-violet-50">
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
              <Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Connect
              </Link>
              <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white">
                <a
                  href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Connection Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-4xl font-serif text-gray-800 mb-4 flex items-center">
                <span className="mr-3"></span>
                Terms of Service
              </h1>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>Effective Date:</strong> July 22, 2025
                </p>
                <p>
                  <strong>Last Updated:</strong> July 22, 2025
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Welcome to Leilany Rose Healing, a space for intuitive healing, breathwork, and spiritual support
                services offered by Leilany Rose Calataya. By using this website or scheduling services, you agree to
                the following Terms of Service:
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">1. Services Offered</h2>
              <p>This site offers information, resources, and one-on-one or group services in:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Energy healing (e.g., Holy Fire Reiki)</li>
                <li>Breathwork and meditation instruction</li>
                <li>Intuitive guidance and empowerment support</li>
              </ul>
              <p>These services are not a substitute for licensed medical or psychological treatment.</p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">2. Eligibility</h2>
              <p>To use this website or book services, you must be:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>At least 18 years old, or</li>
                <li>Have parental/guardian consent if under 18</li>
              </ul>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">3. Booking and Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sessions are scheduled via Calendly</li>
                <li>Cancellations must be made at least 24 hours in advance to reschedule or receive a refund</li>
                <li>No-shows and late cancellations may result in a forfeited session fee</li>
              </ul>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">4. Payment Terms</h2>
              <p>
                All services must be paid in advance unless otherwise agreed. Payments are processed securely via
                trusted third-party providers like PayPal.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">5. Disclaimer</h2>
              <p>
                All services provided are intended for personal growth, relaxation, and spiritual insight. They do not
                diagnose, treat, or cure any physical or mental health condition. Always consult a licensed healthcare
                provider for medical or psychological concerns.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                All content on this site—including text, images, meditations, logos, and videos—is the property of
                Leilany Rose Healing and may not be used, copied, or reproduced without written permission.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                By participating in any session or using the Site, you agree that Leilany Rose Calataya is not liable
                for any outcomes, interpretations, or actions you take. Services are offered in good faith but results
                may vary.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We may update these terms occasionally. Continued use of the Site or services after changes are posted
                means you accept the new terms.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Contact</h3>
                <p>
                  If you have any questions about the Privacy Policy or Terms of Service, please email:{" "}
                  <a href="mailto:leilanyrose99@gmail.com" className="text-purple-600 hover:text-purple-700">
                    leilanyrose99@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-purple-100 text-center">
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
