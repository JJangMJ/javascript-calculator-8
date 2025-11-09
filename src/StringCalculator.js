export function add(input) {
  if (!input || input.trim() === "") {
    return 0;
  }

  const splittedInput = input.split(/[, :]/);

  const sum = splittedInput.reduce((total, rawValue) => {
    const trimmedValue = rawValue.trim();
    if (trimmedValue === "") {
      return total;
    }

    const parsedNumber = Number(trimmedValue);

    if (Number.isNaN(parsedNumber)) {
      return total;
    }
    return total + parsedNumber;
  }, 0);

  return sum;
}
