/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-brown': '#EDE0D4',
        'medium-brown': '#7F5539',
        'brown-small': '#B08968',
        'brown': '#C38E70',
        'dark-brown' : '#583101',
        'paragraph': '#6c3f26'
      }
    },
  },
  plugins: [],
}

