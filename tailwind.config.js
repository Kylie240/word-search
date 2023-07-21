/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor': '#2a68ff',
        'greyColor': '#f1f4f8',
        'shadowColor':'#f7f8f9',
        'textColor':'#252b36'
      }
    },
  },
  plugins: [],
}

