export const ERROR_PREFIX = "[ERROR] ";

export const ERROR = {
  INVALID_CUSTOM_DELIMITER: `${ERROR_PREFIX} 유효하지 않은 커스텀 구분자입니다.`,
  CUSTOM_DELIMITER_IS_NUMBER: `${ERROR_PREFIX} 커스텀 구분자는 숫자가 될 수 없습니다.`,
  CUSTOM_DELIMITER_HAS_DECIMAL: `${ERROR_PREFIX} 소수점은 구분자로 사용할 수 없습니다.`,
  NEGATIVE_NUMBER: `${ERROR_PREFIX} 음수는 허용되지 않습니다.`,
  INVALID_TOKEN: `${ERROR_PREFIX} 구분자와 양수로만 구성된 문자열이어야 합니다.`,
};
