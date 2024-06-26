/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      Inter: ['Inter','sans-serif'] 
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}