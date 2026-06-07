export type PlaceCategory = 'winery' | 'restaurant' | 'hotel' | 'tour' | 'spa';

export type Tag =
  | 'pet_friendly'
  | 'family'
  | 'luxury'
  | 'budget'
  | 'live_music'
  | 'wedding_venue'
  | 'tasting_room'
  | 'outdoor'
  | 'romantic';

export type Place = {
  id: string;
  slug: string;
  name_en: string;
  name_es: string;
  description_en: string;
  description_es: string;
  category: PlaceCategory;
  tags: Tag[];
  address: string;
  lat: number;
  lng: number;
  phone: string;
  whatsapp: string;
  website: string;
  instagram: string;
  opentable_url: string | null
  hours: Record<string, string>;
  price_range: 1 | 2 | 3 | 4;
  images: string[];
  featured: boolean;
  active: boolean;
  created_at: string;
};

export type ItineraryType =
  | 'romantic'
  | 'premium'
  | 'one_day'
  | 'family'
  | 'first_time';

export type Itinerary = {
  id: string;
  slug: string;
  title_en: string;
  title_es: string;
  description_en: string;
  description_es: string;
  type: ItineraryType;
  duration_hours: number;
  place_ids: string[];
};

export type LeadType =
  | 'whatsapp_click'
  | 'website_click'
  | 'phone_click'
  | 'instagram_click'
  | 'form';

export type LeadSource = 'tourist' | 'business';

export type Lead = {
  id: string;
  place_id: string;
  type: LeadType;
  source: LeadSource;
  created_at: string;
};
