import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-wine-900 to-stone-900" />
      
      {/* Decorative overlay */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #8B2635 0%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
        
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest">
          Valle de Guadalupe · Ensenada, Baja California
        </p>

        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
          Discover the Heart of{' '}
          <span className="text-gold-400">Baja Wine Country</span>
        </h1>

        <p className="text-stone-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Plan your perfect day among world-class wineries, restaurants, and experiences in Valle de Guadalupe — just 90 minutes from San Diego.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button href="/en/explore" variant="primary" className="text-base px-8 py-3">
            Explore the Route
          </Button>
          <Button href="/en/itineraries" variant="outline" className="text-base px-8 py-3 border-white text-white hover:bg-white/10">
            View Itineraries
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 pt-8 border-t border-white/10 mt-4">
          {[
            { value: '20+', label: 'Wineries' },
            { value: '15+', label: 'Restaurants' },
            { value: '5', label: 'Itineraries' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading font-bold text-2xl text-gold-400">{stat.value}</p>
              <p className="text-stone-400 text-xs uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-white/40 text-xs uppercase tracking-widest">Scroll</p>
        <div className="w-px h-8 bg-white/20" />
      </div>

    </section>
  )
}