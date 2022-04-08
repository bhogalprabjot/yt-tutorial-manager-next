module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-light': '#202020',
        'red': '#FF0000',
        'black-dark': '#181818'
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
