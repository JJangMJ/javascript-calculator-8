import { BASE_DELIMITERS } from "./constants/delimiters.js";

function extractCustomDelimiter(input) {
  const customDelimiterPattern = /^\/\/(.)(\\n|\n)/;
  const match = input.match(customDelimiterPattern);

  if (!match) {
    return { text: input, customDelimiter: null };
  }

  const customDelimiter = match[1];
  const remainingText = input.slice(match[0].length);

  return { text: remainingText, customDelimiter };
}

function buildDelimiterRegex(customDelimiter) {
  const delimiters = [...BASE_DELIMITERS];

  if (customDelimiter) {
    delimiters.push(customDelimiter);
  }

  const escapedDelimiters = delimiters.map((delimiter) =>
    delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );

  const pattern = escapedDelimiters.join("|");
  return new RegExp(pattern);
}

export function parseToNumbers(input) {
  if (!input || input.trim() === "") {
    return [];
  }

  const { text, customDelimiter } = extractCustomDelimiter(input);
  const delimiterRegex = buildDelimiterRegex(customDelimiter);
  const splittedInput = text.split(delimiterRegex);
  const trimmedValues = splittedInput
    .map((value) => value.trim())
    .filter((value) => value !== "");
  const numbers = trimmedValues
    .map((value) => Number(value))
    .filter((value) => !Number.isNaN(value));

  return numbers;
}
