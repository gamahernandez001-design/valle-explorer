import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50:  '#fdf4f0',
          100: '#fae8e0',
          500: '#8B2635',
          700: '#6d1e2a',
          900: '#4a0e1a',
        },
        gold: {
          400: '#C9A84C',
          500: '#B8932A',
        },
        stone: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          800: '#292524',
          900: '#1c1917',
        },
        cream: {
  DEFAULT: '#FAF7F2',
  50: '#FAF7F2',
},
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(28,25,23,0.7) 0%, rgba(74,14,26,0.5) 100%)',
      },
    },
  },
  plugins: [],
}

export default config