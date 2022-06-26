/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        mobile: { raw: '(pointer: course)' },
        pc: { raw: '(pointer:fine)' },
      },
      colors: {
        orange: colors.orange,
        blueGray: colors.slate,
        coolGray: colors.gray,
        teal: colors.teal,
        dark: '#111827',
        darker: '#0d131f',
        midnight: '#1e293b',
        'midnight-hover': '#334155',
        emerald: colors.emerald,
        fuchsia: colors.fuchsia,
        amber: colors.amber,
        sky: colors.sky,
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: [
          'Pretendard Std',
          'Pretendard',
          '-apple-system',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    container: false,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
