module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',

          500: '#0080ff',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
