"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface MobileMenuProps {
  currentPage?: string
}

export function MobileMenu({ currentPage }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-700 hover:text-purple-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/lrc-logo.png"
                  alt="Leilany Rose Healing"
                  width={24}
                  height={24}
                  className="h-6 w-auto"
                />
                <span className="text-sm font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                  Leilany Rose Healing
                </span>
              </div>
              <button onClick={closeMenu} className="p-2 text-gray-700 hover:text-purple-600" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="p-4 space-y-4">
              <Link
                href="/"
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  currentPage === "home"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  currentPage === "about"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  currentPage === "services"
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="block py-2 px-3 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                onClick={closeMenu}
              >
                Connect
              </Link>

              <div className="pt-4 border-t">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg">
                  <a
                    href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Free Connection Call
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
