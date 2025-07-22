import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPage() {
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
                Privacy Policy
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
                Leilany Rose Healing is committed to protecting your privacy. This Privacy Policy outlines how your
                personal information is collected, used, and shared when you visit or interact with
                www.leilanyrosehealing.com.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
              <p>When you visit the Site or book a service, we may collect the following information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> such as your name, email address, phone number (e.g., through
                  booking forms or email sign-ups)
                </li>
                <li>
                  <strong>Usage Information:</strong> including IP address, browser type, pages visited, time spent, and
                  referring pages (via tools like Google Analytics)
                </li>
                <li>
                  <strong>Booking Information:</strong> through third-party platforms like Calendly or PayPal if you
                  schedule a session or make a payment
                </li>
              </ul>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide services you request</li>
                <li>Schedule and manage appointments</li>
                <li>Send emails, confirmations, or occasional updates (if you opt in)</li>
                <li>Analyze and improve website performance and user experience</li>
              </ul>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">3. Third-Party Services</h2>
              <p>We use trusted third-party tools to help run this business, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calendly (for booking)</li>
                <li>Google Analytics (for understanding site usage)</li>
                <li>PayPal (for secure payments)</li>
                <li>Email marketing tools</li>
              </ul>
              <p>
                These third parties may access basic data as needed to perform their services. We do not sell your
                information.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">4. Cookies</h2>
              <p>
                This website uses cookies and similar technologies to enhance your browsing experience. You may disable
                cookies in your browser settings if you prefer not to share this data.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to the personal information we hold about you</li>
                <li>Ask us to correct or delete your data</li>
                <li>Withdraw your consent at any time</li>
              </ul>
              <p>To exercise these rights, contact us at leilanyrose99@gmail.com.</p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">6. Data Security</h2>
              <p>
                We use reasonable measures to protect your personal data, but no method of transmission over the
                internet is 100% secure.
              </p>

              <h2 className="text-2xl font-serif text-gray-800 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
              <p>
                We may update this policy from time to time. The most recent version will always be posted on this page
                with the updated date.
              </p>
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
