/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Vite potrzebuje ścieżek do plików w projekcie
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xl3: "1600px",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
