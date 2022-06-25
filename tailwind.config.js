module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '390',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        main: {
          '50': '#f2fbf9',
          '100': '#d3f4ec',
          '200': '#a7e8da',
          '300': '#73d5c3',
          '400': '#46bbaa',
          '500': '#31ad9d',
          '600': '#227f75',
          '700': '#1f6660',
          '800': '#1d524e',
          '900': '#1c4541',
        },
        'default': '#2a3735',
      }
    }


  },
  plugins: [],
}