/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-dark-100': '#050505',
      'primary-dark-200': '#1F1F1F',
      'primary-dark-300': '#2D2D2D',
      'primary-dark-400': '#3A3A3A',
      'primary-dark-500': '#757575',
      'primary-light-100': '#E9E9E9',
      'primary-light-200': '#F4F4F4',
      'primary-light-300': '#FFFFFF',
      'nature-100': '#A445ED',
      'nature-200': '#FF5252',
    },
    fontFamily: {
      SansSerif: ['Sans-Serif'],
      Serif: ['Serif'],
      Mono: ['Mono'],
    },
    fontSize: {
      hl: ['64px', '77px'],
      hm: ['24px', '29px'],
      hs: ['20px', '24px'],
      bm: ['18px', '24px'],
      bs: ['14px', '17px'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['cupcake', 'dark', 'emerald', 'light'],
  },
};
