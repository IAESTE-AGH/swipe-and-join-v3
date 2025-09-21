/** @type {import('tailwindcss').Config} */
import * as utils from "./src/utils/tailwindUtils.cjs";

import { fontFamily } from "tailwindcss/defaultTheme";

import * as values from "./src/utils/generator.cjs";
// You might still import generateBreakpoints here if you use it for screens
// import { generateBreakpoints } from './src/utils/tailwindUtils'; // Adjust path as needed
const safelist = utils.applyValuesToBreakpoints("mt-", values.valuesMt);
const safelistH = utils.applyValuesToBreakpoints("h-", values.valuesH);
console.log("safelistH:", safelistH);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,cjs}"],
  safelist: [...safelist, ...safelistH],
  theme: {
    extend: {
      screens: {
        //...config.generateBreakpoints(622, 0.965, 20),
        ...utils.generateBreakpoints(622, 0.965, 20),
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
