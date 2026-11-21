/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F3F5F2',
        surface: '#FFFFFF',
        surface2: '#E6EAE5',
        ink: '#0B0D0C',
        muted: '#56625F',
        onink: '#A3ADAA',
        sand: '#EFE9DD',
        field: '#16191A',
        teal: { DEFAULT: '#00E5C3', text: '#006B5C', on: '#060608' },
        phone: { bg: '#0E1117', card: '#060608', border: '#1E2530', text: '#E6EBEA', muted: '#8A9997' },
        st: { auto: '#00E5C3', ok: '#F5B544', blocked: '#FF5D5D' },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { container: '1280px' },
      borderRadius: { hero: '48px', bento: '36px', phone: '44px' },
    },
  },
  plugins: [],
};
