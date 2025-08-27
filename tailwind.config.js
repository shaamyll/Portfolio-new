// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './ad/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        halvicta: ['Halvetica', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lexendDeca: ['Lexend Deca', 'sans-serif'], 
        poppins: ['"Poppins"', 'serif'],
        monts: ['"montserrat",sans-serif']
      },
    },
  },
  plugins: [],
}