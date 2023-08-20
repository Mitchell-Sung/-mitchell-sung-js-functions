// @ts-check

import VALID_LENGTH from '../../consts/validation/validLength.js';
import VALID_MSG from '../../consts/validation/validMessage.js';
import VALID_REGEX from '../../consts/validation/validRegex.js';
import checkStringType from '../checkTypes/checkStringType.js';
import handleValidation from './handleValidation.js';
import trimAndGetStringLength from './trimAndGetStringLength.js';

/**
 * @function validatePassword
 * @param {string} value
 * @returns {{hasError: boolean, errorMessage: string}}
 * @throws {TypeError}
 */
function validatePassword(value) {
  checkStringType(value);

  const { trimmedValue, valueLen } = trimAndGetStringLength(value);

  if (trimmedValue === '') {
    return handleValidation(true, VALID_MSG.REQUIRED);
  }

  if (
    !(
      valueLen >= VALID_LENGTH.PASSWORD_MIN &&
      valueLen <= VALID_LENGTH.PASSWORD_MAX
    )
  ) {
    return handleValidation(true, VALID_MSG.PASSWORD_LENGTH);
  }

  if (!VALID_REGEX.PASSWORD_UPPERCASE.test(trimmedValue)) {
    return handleValidation(true, VALID_MSG.PASSWORD_UPPERCASE);
  }

  if (!VALID_REGEX.PASSWORD_LOWERCASE.test(trimmedValue)) {
    return handleValidation(true, VALID_MSG.PASSWORD_LOWERCASE);
  }

  if (!VALID_REGEX.PASSWORD_NUMBER.test(trimmedValue)) {
    return handleValidation(true, VALID_MSG.PASSWORD_NUMBER);
  }

  if (!VALID_REGEX.PASSWORD_SYMBOL.test(trimmedValue)) {
    return handleValidation(true, VALID_MSG.PASSWORD_SYMBOL);
  }

  return handleValidation(false, '');
}

export default validatePassword;
