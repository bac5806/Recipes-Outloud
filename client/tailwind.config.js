module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        landing: ['Merienda'] 
      },
      colors: {
        darkGreen: '#1a535c',
        offWhite: '#f7fff7',
        darkBlue: '#003049',
        bRed: '#d62828',
        wOrange: '#f77f00',
        wYellow: '#fcbf49',
        beige: '#eae2b7'

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
