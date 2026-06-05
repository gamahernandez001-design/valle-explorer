import type { PlaceCategory } from '@/types';

export const categories: Record<
  PlaceCategory,
  { label: { en: string; es: string }; emoji: string }
> = {
  winery: {
    label: { en: 'Winery', es: 'Vinícola' },
    emoji: '🍷',
  },
  restaurant: {
    label: { en: 'Restaurant', es: 'Restaurante' },
    emoji: '🍽️',
  },
  hotel: {
    label: { en: 'Hotel', es: 'Hotel' },
    emoji: '🏨',
  },
  tour: {
    label: { en: 'Tour', es: 'Tour' },
    emoji: '🚌',
  },
  spa: {
    label: { en: 'Spa', es: 'Spa' },
    emoji: '💆',
  },
};
