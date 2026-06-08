import Link from 'next/link'

const navLinks = [
  { label: 'Explore', href: '/en/explore' },
  { label: 'Itineraries', href: '/en/itineraries' },
  { label: 'For Businesses', href: '/en/for-businesses' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-heading font-bold text-xl text-white">Ruta del Vino</p>
              <p className="text-gold-400 text-sm">Valle de Guadalupe</p>
            </div>
            <p className="text-sm leading-relaxed">
              Your guide to discovering the best wineries, restaurants, and experiences in Baja California wine country.
            </p>
            <p className="text-xs text-stone-500">Ensenada, Baja California, México</p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm uppercase tracking-wider">Explore</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-white font-semibold text-sm uppercase tracking-wider">Contact</p>
            <p className="text-sm">Are you a business owner?</p>
            <Link
              href="/en/for-businesses"
              className="text-gold-400 text-sm hover:text-gold-500 transition-colors font-medium"
            >
              List your business →
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-stone-500">
            © {currentYear} Ruta del Vino. All rights reserved.
          </p>
          <p className="text-xs text-stone-600">
            Built with ♥ in Baja California
          </p>
        </div>
      </div>
    </footer>
  )
}