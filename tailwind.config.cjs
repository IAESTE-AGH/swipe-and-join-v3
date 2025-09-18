/** @type {import('tailwindcss').Config} */
import * as config from "./src/utils/tailwindUtils.cjs";

import { fontFamily } from "tailwindcss/defaultTheme";
let valuesH = [
  7, 7, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];
// You might still import generateBreakpoints here if you use it for screens
// import { generateBreakpoints } from './src/utils/tailwindUtils'; // Adjust path as needed
const safelist = config.applyValuesToBreakpoints("mt-", config.valuesMt);
const safelistH = config.applyValuesToBreakpoints("h-", config.valuesH);
console.log("safelist", safelistH);
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,cjs}"],
  safelist: [...safelist, ...safelistH],
  theme: {
    extend: {
      screens: {
        //...config.generateBreakpoints(622, 0.965, 20),
        ...config.screens,
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
