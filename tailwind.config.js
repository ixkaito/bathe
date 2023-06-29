const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,astro}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        inter: ['inter variable', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#0080ff',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
