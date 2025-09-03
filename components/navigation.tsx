"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Instagram, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/art", label: "Art" },
  ]

  return (
    <nav className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6 bg-white border-b border-gray-100 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center z-20">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center shadow-sm">
          <span className="text-white font-serif text-lg font-bold">SS</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary relative ${
              pathname === item.href ? "text-primary" : "text-gray-600"
            }`}
          >
            {item.label}
            {pathname === item.href && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </Link>
        ))}

        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors ml-2"
        >
          <Instagram size={18} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden z-20 p-2 text-gray-600 hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-10 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-primary transition-colors mt-8"
            >
              <Instagram size={32} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
