/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(79 70 229)",
        tint: "rgb(49 46 129)",
        shade: "rgb(129 140 248)",
        danger: "rgb(239 68 68)"
      }
    },
  },
  plugins: [],
}