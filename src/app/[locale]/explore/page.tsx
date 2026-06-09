import { Suspense } from 'react'
import PlaceFilters from '@/components/places/PlaceFilters'
import PlaceCard from '@/components/places/PlaceCard'
import { places } from '@/config/places'
import type { Place } from '@/types'

type ExplorePageProps = {
  searchParams: { category?: string; tags?: string }
}

function filterPlaces(allPlaces: Place[], category?: string, tags?: string) {
  let filtered = allPlaces.filter((p) => p.active)

  if (category && category !== 'all') {
    filtered = filtered.filter((p) => p.category === category)
  }

  if (tags) {
    const tagList = tags.split(',').filter(Boolean)
    if (tagList.length > 0) {
      filtered = filtered.filter((p) =>
        tagList.every((tag) => p.tags.includes(tag as Place['tags'][number]))
      )
    }
  }

  return filtered
}

export default function ExplorePage({ searchParams }: ExplorePageProps) {
  const filtered = filterPlaces(places, searchParams.category, searchParams.tags)

  const activeCategory = searchParams.category || 'all'
  const categoryLabels: Record<string, string> = {
    all: 'All Places',
    winery: 'Wineries',
    restaurant: 'Restaurants',
    hotel: 'Hotels',
    tour: 'Tours',
    spa: 'Spas',
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Page Header */}
      <div className="bg-wine-900 pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Valle de Guadalupe
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Explore the Route
          </h1>
          <p className="text-stone-300 mt-2">
            Discover wineries, restaurants, hotels and experiences
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Filters */}
        <div className="mb-8">
          <Suspense fallback={<div className="h-20 bg-stone-100 rounded-xl animate-pulse" />}>
            <PlaceFilters />
          </Suspense>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-stone-500 text-sm">
            <span className="font-semibold text-stone-900">{filtered.length}</span>
            {' '}places in{' '}
            <span className="font-semibold text-stone-900">
              {categoryLabels[activeCategory]}
            </span>
          </p>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🍷</p>
            <p className="font-heading font-semibold text-xl text-stone-700">
              No places found
            </p>
            <p className="text-stone-400 mt-2">
              Try adjusting your filters
            </p>
          </div>
        )}

      </div>
    </div>
  )
}