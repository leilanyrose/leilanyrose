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
          className="relative p-2 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors border-2 border-purple-700"
          aria-label="Toggle menu"
          type="button"
          style={{
            minWidth: "44px",
            minHeight: "44px",
            WebkitAppearance: "none",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-purple-100">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/lrc-logo.png"
                  alt="Leilany Rose Healing"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-lg font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700">
                  Leilany Rose Healing
                </span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-600 hover:text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                aria-label="Close menu"
                type="button"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-6 space-y-2">
              <Link
                href="/"
                className={`block py-3 px-4 rounded-xl transition-all duration-200 ${
                  currentPage === "home"
                    ? "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block py-3 px-4 rounded-xl transition-all duration-200 ${
                  currentPage === "about"
                    ? "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block py-3 px-4 rounded-xl transition-all duration-200 ${
                  currentPage === "services"
                    ? "bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 font-semibold shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                href="/#contact"
                className="block py-3 px-4 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200"
                onClick={closeMenu}
              >
                Connect
              </Link>

              <div className="pt-6 border-t border-purple-100">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg rounded-xl py-3">
                  <a
                    href="https://calendly.com/leilanyrose99/30min?month=2025-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="block w-full"
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
