import Link from 'next/link'

const categories = [
  { slug: 'winery', label: 'Wineries', emoji: '🍷', count: 12 },
  { slug: 'restaurant', label: 'Restaurants', emoji: '🍽️', count: 8 },
  { slug: 'hotel', label: 'Hotels', emoji: '🏡', count: 6 },
  { slug: 'tour', label: 'Tours', emoji: '🗺️', count: 4 },
  { slug: 'spa', label: 'Spas', emoji: '💆', count: 3 },
]

export default function Categories() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="text-center mb-10">
        <h2 className="font-heading font-bold text-3xl text-stone-900">
          What are you looking for?
        </h2>
        <p className="text-stone-500 mt-2">
          Browse by category and find your perfect experience
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/en/explore?category=${cat.slug}`}
            className="group flex flex-col items-center gap-3 bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-wine-100 transition-all duration-200"
          >
            <span className="text-4xl">{cat.emoji}</span>
            <div className="text-center">
              <p className="font-semibold text-stone-900 group-hover:text-wine-500 transition-colors">
                {cat.label}
              </p>
              <p className="text-stone-400 text-xs mt-0.5">{cat.count} places</p>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}