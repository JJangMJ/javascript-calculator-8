import { parseToNumbers } from "./Parser.js";
import { validateNumbers } from "./Validator.js";

export function add(input) {
  const numbers = parseToNumbers(input);

  return numbers.reduce((total, number) => total + number, 0);
}
