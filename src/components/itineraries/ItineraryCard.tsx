import Link from 'next/link'
import type { Itinerary } from '@/types'

const typeEmojis: Record<string, string> = {
  romantic: '🌹',
  premium: '⭐',
  one_day: '🗺️',
  family: '👨‍👩‍👧',
  first_time: '🍷',
}

type ItineraryCardProps = {
  itinerary: Itinerary
}

export default function ItineraryCard({ itinerary }: ItineraryCardProps) {
  return (
    <Link href={`/en/itineraries/${itinerary.slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-200 p-6 flex flex-col gap-3">
        
        <div className="flex items-center gap-3">
          <span className="text-3xl">{typeEmojis[itinerary.type]}</span>
          <div>
            <h3 className="font-heading font-semibold text-stone-900 group-hover:text-wine-500 transition-colors">
              {itinerary.title_en}
            </h3>
            <p className="text-stone-400 text-xs">
              {itinerary.duration_hours} hours · {itinerary.place_ids.length} stops
            </p>
          </div>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
          {itinerary.description_en}
        </p>

        <p className="text-wine-500 text-sm font-medium group-hover:text-wine-700 transition-colors">
          See itinerary →
        </p>
      </div>
    </Link>
  )
}