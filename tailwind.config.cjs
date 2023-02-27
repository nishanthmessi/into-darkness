/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Major Mono Display', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-hero': {
          'background-image' : 'linear-gradient(rgba(0, 0, 0, 0.500),rgba(0, 0, 0, 0.5)) , url("https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          'background-position': 'center',
          'background-size': 'cover',
        },
        '.bg-bottom-section': {
          'background-image' : `linear-gradient(rgba(0, 0, 0, 0.500),rgba(0, 0, 0, 0.5)) , url(/src/assets/webbimg.jpg)`,
          'background-position': 'center',
          'background-size': 'cover',
        },
        '.bg-home': {
          'background-image' : `linear-gradient(rgba(0, 0, 0, 0.500),rgba(0, 0, 0, 0.6)) , url(/src/assets/space.jpg)`,
          'background-position': 'center',
          'background-size': 'cover',
        },
      });
    }),
  ],
}
