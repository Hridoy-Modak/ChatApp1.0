/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary_blue: '#5873FF',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
