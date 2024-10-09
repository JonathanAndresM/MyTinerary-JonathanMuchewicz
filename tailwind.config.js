/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-main': "url('src/assets/savvas-kalimeris-hO3do8FKJkQ-unsplash.jpg')",
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0' },  
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 5s ease-in-out infinite', 
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 1)',
        'md': '4px 4px 6px rgba(0, 0, 0, 0.5)',
        'lg': '6px 6px 8px rgba(0, 0, 0, 0.5)',
        'white': '2px 2px 3px rgba(255, 255, 255, 10)',
        'full': '2px 2px 4px rgba(0, 0, 0, 10)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        },
        '.text-shadow-md': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '6px 6px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
        '.text-shadow-white': {
          textShadow: '2px 2px 3px rgba(255, 255, 255, 10)',
        },
        '.text-shadow-full': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 10)',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}

