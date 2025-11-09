import { parseToNumbers } from "./Parser.js";

export function add(input) {
  const numbers = parseToNumbers(input);

  return numbers.reduce((total, number) => total + number, 0);
}
