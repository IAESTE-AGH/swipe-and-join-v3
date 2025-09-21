/** @type {import('tailwindcss').Config} */
import * as utils from "./src/utils/tailwindUtils.cjs";

import { fontFamily } from "tailwindcss/defaultTheme";

const screens = utils.generateBreakpoints(622, 0.965, 20);
const valuesMt = [
  7, 6, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];

const valuesH = [
  7, 7, 6, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];
export { valuesMt, valuesH };
// You might still import generateBreakpoints here if you use it for screens
// import { generateBreakpoints } from './src/utils/tailwindUtils'; // Adjust path as needed
const safelist = utils.applyValuesToBreakpoints("mt-", valuesMt);
const safelistH = utils.applyValuesToBreakpoints("h-", valuesH);
console.log("safelistH:", safelistH);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,cjs}"],
  safelist: [...safelist, ...safelistH],
  theme: {
    extend: {
      screens: {
        //...config.generateBreakpoints(622, 0.965, 20),
        ...screens,
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
