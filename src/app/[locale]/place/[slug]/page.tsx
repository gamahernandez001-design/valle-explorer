import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPlaceBySlug, places } from '@/config/places'
import ContactButtons from '@/components/places/ContactButtons'
import HoursTable from '@/components/places/HoursTable'
import PlaceCard from '@/components/places/PlaceCard'
import Badge from '@/components/ui/Badge'
import PriceRange from '@/components/ui/PriceRange'
import type { Place } from '@/types'

type PlacePageProps = {
  params: { slug: string; locale: string }
}

export async function generateMetadata({ params }: PlacePageProps): Promise<Metadata> {
  const place = getPlaceBySlug(params.slug)
  if (!place) return { title: 'Place not found' }

  return {
    title: `${place.name_en} — Ruta del Vino`,
    description: place.description_en.slice(0, 155),
  }
}

export async function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }))
}

const categoryLabels: Record<string, string> = {
  winery: 'Winery',
  restaurant: 'Restaurant',
  hotel: 'Hotel',
  tour: 'Tour',
  spa: 'Spa',
}

export default function PlacePage({ params }: PlacePageProps) {
  const place = getPlaceBySlug(params.slug)
  if (!place) notFound()

  const related = places
    .filter((p) => p.category === place.category && p.id !== place.id && p.active)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-[#FAF7F2]">

      {/* Hero Image */}
      <div className="relative h-72 sm:h-96 bg-gradient-to-br from-wine-900 to-stone-800 flex items-center justify-center">
        <span className="text-white/20 text-sm">Photo coming soon</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-20 left-4 sm:left-8">
          <Link
            href="/en/explore"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            ← Back to Explore
          </Link>
        </div>

        {/* Place name overlay */}
        <div className="absolute bottom-6 left-4 sm:left-8 right-4 sm:right-8">
          <Badge label={categoryLabels[place.category]} variant="category" />
          <h1 className="font-heading font-bold text-2xl sm:text-4xl text-white mt-2">
            {place.name_en}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — Main Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Tags & Price */}
            <div className="flex flex-wrap items-center gap-3">
              <PriceRange value={place.price_range} />
              {place.tags.map((tag) => (
                <Badge key={tag} label={tag.replace('_', ' ')} variant="tag" />
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-heading font-semibold text-xl text-stone-900 mb-3">
                About
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {place.description_en}
              </p>
            </div>

            {/* Hours */}
            <div>
              <h2 className="font-heading font-semibold text-xl text-stone-900 mb-3">
                Hours
              </h2>
              <div className="bg-white rounded-xl border border-stone-100 p-4">
                <HoursTable hours={place.hours} />
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="font-heading font-semibold text-xl text-stone-900 mb-3">
                Location
              </h2>
              <div className="bg-stone-200 rounded-xl h-48 flex items-center justify-center">
                <p className="text-stone-400 text-sm">Map coming soon</p>
              </div>
              <p className="text-stone-500 text-sm mt-2">📍 {place.address}</p>
            </div>

          </div>

          {/* Right — Contact Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl border border-stone-100 p-6 sticky top-24">
              <h2 className="font-heading font-semibold text-lg text-stone-900 mb-4">
                Contact & Reserve
              </h2>
              <ContactButtons place={place} />
            </div>
          </div>

        </div>

        {/* Related Places */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading font-bold text-2xl text-stone-900 mb-6">
              Similar Places
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p: Place) => (
                <PlaceCard key={p.id} place={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}