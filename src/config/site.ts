export const siteConfig = {
  name: 'Ruta del Vino',
  description: {
    en: 'Discover wineries, restaurants, hotels, and experiences in the Valle de Guadalupe, Baja California.',
    es: 'Descubre vinícolas, restaurantes, hoteles y experiencias en el Valle de Guadalupe, Baja California.',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
  },
  locales: ['en', 'es'] as const,
  defaultLocale: 'en' as const,
};
