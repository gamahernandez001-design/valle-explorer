'use client'

import type { Place } from '@/types'

type ContactButtonsProps = {
  place: Place
}

async function trackLead(placeId: string, type: string) {
  try {
    await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ place_id: placeId, type, source: 'tourist' }),
    })
  } catch {
    // silently fail
  }
}

export default function ContactButtons({ place }: ContactButtonsProps) {
  return (
    <div className="flex flex-col gap-3">

      {place.whatsapp && (
        <a
          href={`https://wa.me/${place.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead(place.id, 'whatsapp_click')}
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          <span>📱</span> WhatsApp
        </a>
      )}

      {place.website && (
        <a
          href={place.website}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead(place.id, 'website_click')}
          className="flex items-center justify-center gap-2 bg-wine-500 hover:bg-wine-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          <span>🌐</span> Visit Website
        </a>
      )}

      {place.instagram && (
        <a
          href={place.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead(place.id, 'instagram_click')}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          <span>📸</span> Instagram
        </a>
      )}

      {place.opentable_url && (
        <a
          href={place.opentable_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead(place.id, 'website_click')}
          className="flex items-center justify-center gap-2 bg-[#DA3743] hover:bg-[#c02f3a] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          <span>🍽️</span> Reserve on OpenTable
        </a>
      )}

      {place.phone && (
        <a
          href={`tel:${place.phone}`}
          onClick={() => trackLead(place.id, 'phone_click')}
          className="flex items-center justify-center gap-2 border-2 border-stone-200 hover:border-stone-300 text-stone-700 font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          <span>📞</span> {place.phone}
        </a>
      )}

    </div>
  )
}