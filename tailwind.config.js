/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // Scan only HTML files for class candidates.
    // We intentionally ignore inline <script>/<style> contents because Tailwind will
    // otherwise pick up words like "hidden", "blur", "visible", etc. from JS/CSS
    // that happen to be valid utility names, causing noisy CSS diffs on rebuilds.
    files: ["./public/**/*.html"],
    transform: {
      html: (content) =>
        content
          .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
          .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ""),
    },
  },
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