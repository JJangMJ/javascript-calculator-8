import { ERROR } from "./constants/ErrorMessage.js";

export function validateCustomDelimiter(rawDelimiter) {
  if (!rawDelimiter) {
    throw new Error(ERROR.INVALID_CUSTOM_DELIMITER);
  }
  if (!Number.isNaN(Number(rawDelimiter))) {
    throw new Error(ERROR.CUSTOM_DELIMITER_IS_NUMBER);
  }
  if (rawDelimiter.includes(".")) {
    throw new Error(ERROR.CUSTOM_DELIMITER_HAS_DECIMAL);
  }
}

export function validateNumbers(numbers) {
  if (numbers.some((n) => n < 0)) {
    throw new Error(ERROR.NEGATIVE_NUMBER);
  }
}
