/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          light: "#E9D5FF", // Light lavender
          DEFAULT: "#A78BFA", // Regular purple
          dark: "#7C3AED", // Deep purple
          accent: "#9D4EDD", // Vibrant accent purple
          muted: "#6B21A8", // Muted dark purple
          midnight: "#4C1D95", // Rich dark purple
          lilac: "#C4B5FD", // Soft lilac
          orchid: "#D8B4FE", // Light orchid
          bgBlack: "#333",
        },
      },
    },
  },
  plugins: [],
}
