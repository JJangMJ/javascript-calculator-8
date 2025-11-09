import { BASE_DELIMITERS } from "./constants/delimiters.js";
import { validateCustomDelimiter, validateNumbers } from "./Validator.js";
import {
  CUSTOM_DELIMITER_PATTERN,
  REGEX_ESCAPE_PATTERN,
  NUMBER_FILTER_PATTERN,
  WHITESPACE_PATTERN,
} from "./constants/patterns.js";

function extractCustomDelimiter(input) {
  const match = input.match(CUSTOM_DELIMITER_PATTERN);

  if (!match) {
    return { text: input, customDelimiter: null };
  }

  const customDelimiter = match[1];
  validateCustomDelimiter(customDelimiter);

  const remainingText = input.slice(match[0].length);
  return { text: remainingText, customDelimiter };
}

function buildDelimiterRegex(customDelimiter) {
  const delimiters = [...BASE_DELIMITERS];

  if (customDelimiter) {
    delimiters.push(customDelimiter);
  }

  const escapedDelimiters = delimiters.map((delimiter) =>
    delimiter.replace(REGEX_ESCAPE_PATTERN, "\\$&")
  );

  const pattern = escapedDelimiters.join("|");
  return new RegExp(pattern);
}

function normalizeToNumber(rawValue) {
  const onlyNumberChars = rawValue.replace(NUMBER_FILTER_PATTERN, "");
  const cleaned = onlyNumberChars.replace(WHITESPACE_PATTERN, "");
  const normalized = cleaned === "" ? "0" : cleaned;

  return Number(normalized);
}

export function parseToNumbers(input) {
  if (!input || input.trim() === "") {
    return [];
  }

  const { text, customDelimiter } = extractCustomDelimiter(input);
  const delimiterRegex = buildDelimiterRegex(customDelimiter);
  const splittedInput = text.split(delimiterRegex);
  const numbers = splittedInput.map((rawValue) => normalizeToNumber(rawValue));
  validateNumbers(numbers);

  return numbers;
}
