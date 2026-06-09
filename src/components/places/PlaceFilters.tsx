'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'

const categories = [
  { slug: 'all', label: 'All', emoji: '✨' },
  { slug: 'winery', label: 'Wineries', emoji: '🍷' },
  { slug: 'restaurant', label: 'Restaurants', emoji: '🍽️' },
  { slug: 'hotel', label: 'Hotels', emoji: '🏡' },
  { slug: 'tour', label: 'Tours', emoji: '🗺️' },
  { slug: 'spa', label: 'Spas', emoji: '💆' },
]

const tags = [
  { slug: 'romantic', label: 'Romantic' },
  { slug: 'luxury', label: 'Luxury' },
  { slug: 'outdoor', label: 'Outdoor' },
  { slug: 'pet_friendly', label: 'Pet Friendly' },
  { slug: 'family', label: 'Family' },
  { slug: 'live_music', label: 'Live Music' },
  { slug: 'tasting_room', label: 'Tasting Room' },
  { slug: 'budget', label: 'Budget' },
]

export default function PlaceFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get('category') || 'all'
  const currentTags = searchParams.get('tags')?.split(',') || []

  const updateParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value === 'all' || value === '') {
        params.delete(key)
      } else {
        params.set(key, value)
      }
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  const toggleTag = useCallback(
    (tag: string) => {
      const params = new URLSearchParams(searchParams.toString())
      const current = params.get('tags')?.split(',').filter(Boolean) || []
      const updated = current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag]
      if (updated.length === 0) {
        params.delete('tags')
      } else {
        params.set('tags', updated.join(','))
      }
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  return (
    <div className="flex flex-col gap-6">

      {/* Categories */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => updateParams('category', cat.slug)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                currentCategory === cat.slug
                  ? 'bg-wine-500 text-white border-wine-500'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-wine-300'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
          Features
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag.slug}
              onClick={() => toggleTag(tag.slug)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                currentTags.includes(tag.slug)
                  ? 'bg-stone-800 text-white border-stone-800'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}