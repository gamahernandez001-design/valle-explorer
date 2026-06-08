import type { Place } from '@/types'
import PlaceCard from '@/components/places/PlaceCard'
import Button from '@/components/ui/Button'
import { getFeaturedPlaces } from '@/config/places'

export default function FeaturedPlaces() {
  const featured = getFeaturedPlaces()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading font-bold text-3xl text-stone-900">
              Featured Places
            </h2>
            <p className="text-stone-500 mt-2">
              Hand-picked experiences in Valle de Guadalupe
            </p>
          </div>
          <Button href="/en/explore" variant="outline" className="hidden sm:inline-flex">
            View all
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((place : Place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button href="/en/explore" variant="outline">
            View all places
          </Button>
        </div>

      </div>
    </section>
  )
}