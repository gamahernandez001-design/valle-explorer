import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import PriceRange from '@/components/ui/PriceRange'
import type { Place } from '@/types'

const categoryLabels: Record<string, string> = {
  winery: 'Winery',
  restaurant: 'Restaurant',
  hotel: 'Hotel',
  tour: 'Tour',
  spa: 'Spa',
}

type PlaceCardProps = {
  place: Place
}

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <Link href={`/en/place/${place.slug}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-200">
        
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-wine-900 to-stone-800 flex items-center justify-center">
          <span className="text-white/30 text-sm font-medium">Photo coming soon</span>
          <div className="absolute top-3 left-3">
            <Badge label={categoryLabels[place.category]} variant="category" />
          </div>
          {place.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-gold-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading font-semibold text-stone-900 group-hover:text-wine-500 transition-colors leading-tight">
              {place.name_en}
            </h3>
            <PriceRange value={place.price_range} />
          </div>

          <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
            {place.description_en}
          </p>

          {/* Tags */}
          {place.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {place.tags.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  label={tag.replace('_', ' ')}
                  variant="tag"
                />
              ))}
            </div>
          )}

          <p className="text-wine-500 text-sm font-medium group-hover:text-wine-700 transition-colors pt-1">
            View details →
          </p>
        </div>
      </div>
    </Link>
  )
}