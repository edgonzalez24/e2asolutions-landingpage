/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        dark: '#161616',
        teal: '#62d2e0'
      },
      boxShadow: {
        teal: '10px 0 10px -10px rgba(97, 209, 224, 0.9)'
      }
    },
  },
  plugins: [],
}

