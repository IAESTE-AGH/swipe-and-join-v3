export default {
  generateBreakpoints,
  applyValuesToBreakpoints,
  generateResponsiveClasses,
};

//import { valuesMt, valuesH } from "../../tailwind.config.cjs";

//Creates breakpoints exponentially
export function generateBreakpoints(base = 426, factor = 0.85, count = 20) {
  const breakpoints = {};
  for (let i = 0; i < count; i++) {
    const width = Math.round(base * Math.pow(factor, i));
    breakpoints[`tiny${i + 1}`] = `${width}px`;
  }
  return breakpoints;
}
//generating breakpoints for tailwind.config
// const screens = generateBreakpoints(622, 0.965, 20);

// export { screens }; // I'm gonna add here all the values arrays

// Put breakpoints to the classList of the given selector
//by default it adds margin-top classes with values from 1 to 20 for each of 20 breakpoints
export function applyValuesToBreakpoints(
  parameter = "mt-",
  values = Array.from({ length: 20 }, (_, i) => i + 1), // domyślnie: [1, 2, ..., 20],
  base = 622,
  factor = 0.965,
  count = 20,
  unit = "vh"
) {
  const breakpoints = generateBreakpoints(base, factor, count);
  const classList = [];

  Object.keys(breakpoints).forEach((key, index) => {
    const value = values[index] ?? index + 1;
    classList.push(`${key}:${parameter}[${value}${unit}]`);
  });

  return classList;
}

// Przykład użycia:
// applyBreakpointClasses("#my-element"); // automatycznie dodaje tiny1..tiny20

//Adds chosen parametres to the breakpoints with given values
export function generateResponsiveClasses(
  param = "mt-",
  values = Array.from({ length: 20 }, (_, i) => i + 1), // domyślnie: [1, 2, ..., 20],
  breakpoints = [],
  unit = "vh"
) {
  const classes = {};
  for (let i = 0; i < breakpoints.length; i++) {
    const bp = breakpoints[i];
    const value = values[i];
    if (bp && value !== undefined) {
      classes[bp] = `${bp}:${param}[${value}${unit}]`;
      //Adding responsive class. Example: tiny1: "tiny1:mt-[1vh]"
    }
  }
  return classes;
}

// Export both the default config and the utility functions
//console.log(generateBreakpoints(426, 0.85, 20));
