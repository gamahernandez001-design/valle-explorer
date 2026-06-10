'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Itineraries', href: '/itineraries' },
  { label: 'For Businesses', href: '/for-businesses' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/en" className="flex flex-col">
            <span className={`font-heading font-bold text-xl leading-tight transition-colors ${
              'text-wine-900'
            }`}>
              Ruta del Vino
            </span>
            <span className={`text-xs leading-tight transition-colors ${
              scrolled ? 'text-gold-500' : 'text-gold-400'
            }`}>
              Valle de Guadalupe
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/en${link.href}`}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  'text-stone-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 text-sm font-medium">
              <button className={`transition-colors hover:text-gold-500 ${scrolled ? 'text-wine-500' : 'text-wine-500'}`}>
                EN
              </button>
              <span className='text-stone-300'>|</span>
              <button className={`transition-colors hover:text-gold-500 ${scrolled ? 'text-stone-400' : 'text-stone-400'}`}>
                ES
              </button>
            </div>
            <Button href="/en/explore" variant="primary">
              Plan Your Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-stone-800' : 'bg-white'
              } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-stone-800' : 'bg-white'
              } ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-stone-800' : 'bg-white'
              } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/en${link.href}`}
              className="text-stone-800 font-medium hover:text-wine-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2">
            <button className="text-wine-500 text-sm font-medium">EN</button>
            <span className="text-stone-300">|</span>
            <button className="text-stone-400 text-sm font-medium">ES</button>
          </div>
          <Button href="/en/explore" variant="primary" className="w-full">
            Plan Your Visit
          </Button>
        </div>
      )}
    </header>
  )
}