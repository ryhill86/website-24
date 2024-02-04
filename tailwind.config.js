/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      md: '640px',
      lg: '1024px',
      xl: '1500px', // this is the "design resolution"
    },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'Helvetica', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
