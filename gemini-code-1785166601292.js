/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sarkar: {
          dark: '#0B0F17',
          card: '#151C28',
          border: '#2A3447',
          orange: '#FF6B00',
          orangeHover: '#E05E00',
          textMuted: '#94A3B8',
          textLight: '#F8FAFC'
        }
      }
    },
  },
  plugins: [],
}