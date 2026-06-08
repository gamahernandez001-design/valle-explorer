import ItineraryCard from '@/components/itineraries/ItineraryCard'
import Button from '@/components/ui/Button'
import { itineraries } from '@/config/itineraries'

export default function ItinerariesSection() {
  const featured = itineraries.slice(0, 3)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-heading font-bold text-3xl text-stone-900">
            Ready-made Itineraries
          </h2>
          <p className="text-stone-500 mt-2">
            Not sure where to start? We planned it for you
          </p>
        </div>
        <Button href="/en/itineraries" variant="outline" className="hidden sm:inline-flex">
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((itinerary) => (
          <ItineraryCard key={itinerary.id} itinerary={itinerary} />
        ))}
      </div>

    </section>
  )
}