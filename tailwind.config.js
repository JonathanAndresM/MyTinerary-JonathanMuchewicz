/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-main': "url('https://nuevarioja.com.ar/galeria/fotos/2021/10/21/o_55148_1634859127.jpg')",
      },
      boxShadow: {
        'text-shadow-sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'text-shadow-md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'text-shadow-lg': '3px 3px 6px rgba(0, 0, 0, 0.7)',
        'text-shadow-xl': '4px 4px 8px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}

