/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'h-screen',
    'bg-gradient-to-b',
    'from-blue-600',
    'to-blue-400',
    'drop-shadow-lg',
    'rounded-full',
    'hover:scale-105',
    'transition',
    'transform',
    'flex-col',
    'sm:flex-row'
  ]
} 