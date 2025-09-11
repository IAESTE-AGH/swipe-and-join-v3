/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Vite potrzebuje ścieżek do plików w projekcie
  theme: {
    extend: {
      screens: {
        ...generateBreakpoints(426, 0.85, 20),
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

//Creates breakpoints exponentially
function generateBreakpoints(base = 426, factor = 0.85, count = 4) {
  const breakpoints = {};
  for (let i = 0; i < count; i++) {
    const width = Math.round(base * Math.pow(factor, i));
    breakpoints[`tiny${i + 1}`] = `${width}px`;
  }
  return breakpoints;
}

//Adds chosen parametres to the breakpoints with given values
function generateResponsiveClasses(
  param = "mt-",
  values = [],
  breakpoints = []
) {
  const classes = {};
  for (let i = 0; i < breakpoints.length; i++) {
    const bp = breakpoints[i];
    const value = values[i];
    if (bp && value !== undefined) {
      classes[bp] = `${bp}:${param}[${value}]`;
    }
  }
  return classes;
}
