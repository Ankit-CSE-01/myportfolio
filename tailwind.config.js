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
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          text: '#F8FAFC',
          muted: '#94A3B8'
        },
        light: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B'
        },
        primary: '#3B82F6',
        secondary: '#8B5CF6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
