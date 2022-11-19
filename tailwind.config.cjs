/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                 "light-pattern": "url('/light/pattern.png')",
                 "dark-pattern": "url('/dark/pattern.png')",
                 "light-alt-pattern": "url('/light/pattern2.png')",
                 "dark-alt-pattern": "url('/dark/pattern2.png')",
                }),
      colors: {
        "main-red": "#FF4949",
        "main-purple": "#541690",
        "neutral-850": "#1E1E1E",
        "neutral-750": "#323232"
      }
    },
  },
  plugins: [],
}
