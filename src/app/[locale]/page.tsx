import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Categories from '@/components/sections/Categories'
import FeaturedPlaces from '@/components/sections/FeaturedPlaces'
import ItinerariesSection from '@/components/sections/Itineraries'
import ForBusinessesBanner from '@/components/sections/ForBusinessesBanner'

export const metadata: Metadata = {
  title: 'Ruta del Vino — Discover Valle de Guadalupe',
  description: 'Plan your perfect visit to Valle de Guadalupe. Discover the best wineries, restaurants, hotels and experiences in Baja California wine country, just 90 minutes from San Diego.',
  keywords: ['Valle de Guadalupe', 'Ruta del Vino', 'wineries Ensenada', 'Baja California wine', 'wine tasting Mexico'],
  openGraph: {
    title: 'Ruta del Vino — Valle de Guadalupe',
    description: 'Discover the best wineries, restaurants and experiences in Baja California wine country.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedPlaces />
      <ItinerariesSection />
      <ForBusinessesBanner />
    </>
  )
}