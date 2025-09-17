/** @type {import('tailwindcss').Config} */
import * as config from "./src/utils/tailwindUtils.cjs";

import { fontFamily } from "tailwindcss/defaultTheme";
// You might still import generateBreakpoints here if you use it for screens
// import { generateBreakpoints } from './src/utils/tailwindUtils'; // Adjust path as needed

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ...config.generateBreakpoints(426, 0.85, 20),
        // ...config.generateBreakpoints(426, 0.85, 20),
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
