export default {
  generateBreakpoints,
  applyValuesToBreakpoints,
  generateResponsiveClasses,
};

let valuesMt = [
  7, 6, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
];

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
const screens = generateBreakpoints(622, 0.965, 20);

export { screens, valuesMt, valuesH }; // I'm gonna add here all the values arrays

// Put breakpoints to the classList of the given selector
//by default it adds margin-top classes with values from 1 to 20 for each of 20 breakpoints
export function applyValuesToBreakpoints(
  parameter = "mt-",
  values = valuesMt,
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
  values = [],
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
