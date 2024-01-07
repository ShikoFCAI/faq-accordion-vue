/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          pink: "hsl(275, 100%, 97%)",
          greyPurple: "hsl(292, 16%, 49%)",
          darkPurple: "hsl(292, 42%, 14%)",
        },
      },
    },
  },
  plugins: [],
}

