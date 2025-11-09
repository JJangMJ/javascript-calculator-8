import { BASE_DELIMITERS } from "./constants/delimiters.js";

function buildBaseDelimiterRegex() {
  const escapedDelimiters = BASE_DELIMITERS.map((delimiter) =>
    delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );

  const pattern = escapedDelimiters.join("|");
  return new RegExp(pattern);
}

export function parseToNumbers(input) {
  if (!input || input.trim() === "") {
    return [];
  }

  const delimiterRegex = buildBaseDelimiterRegex();
  const splittedInput = input.split(delimiterRegex);
  const trimmedValues = splittedInput
    .map((value) => value.trim())
    .filter((value) => value !== "");
  const numbers = trimmedValues
    .map((value) => Number(value))
    .filter((value) => !Number.isNaN(value));

  return numbers;
}
