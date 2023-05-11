/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '500px',
      md: '980px',
      xl: '1280px',
    },
    extend: {
      colors: {
        'twitter-blue': '#1da1f2',
      },
    },
  },
  plugins: [],
};
