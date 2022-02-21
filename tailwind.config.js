module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
    // colors:{
    //   'white':'#f2f2f2',
    //   'defaultColor':'#986826',
    // },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      borderRadius: ['hover', 'focus'],
      translate: ['active', 'group-hover', 'responsive'],
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
};
