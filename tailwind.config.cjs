/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",   // 👈 system default theme
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C9A24D",
        maroon: "#5A1F1F",
        ivory: "#F5F5F5",
        charcoal: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
