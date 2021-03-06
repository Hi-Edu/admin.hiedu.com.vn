const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./**/*.{js,vue}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        cyan: colors.cyan
      },
      fontFamily: {
        sans: [
          'Inter',
          ...defaultTheme.fontFamily.sans
        ],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  corePlugins: {
    // preflight: false
  }
}
