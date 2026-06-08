import Hero from '@/components/sections/Hero'
import Categories from '@/components/sections/Categories'
import FeaturedPlaces from '@/components/sections/FeaturedPlaces'
import ItinerariesSection from '@/components/sections/Itineraries'
import ForBusinessesBanner from '@/components/sections/ForBusinessesBanner'

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