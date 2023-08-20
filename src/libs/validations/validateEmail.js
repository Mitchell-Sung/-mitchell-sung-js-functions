// @ts-check

import VALID_LENGTH from '../../consts/validation/validLength.js';
import VALID_MSG from '../../consts/validation/validMessage.js';
import VALID_REGEX from '../../consts/validation/validRegex.js';
import checkStringType from '../checkTypes/checkStringType.js';
import handleValidation from './handleValidation.js';
import trimAndGetStringLength from './trimAndGetStringLength.js';

/**
 * @function validateEmail
 * @param {string} value
 * @returns {{hasError: boolean, errorMessage: string}}
 * @throws {TypeError}
 */
function validateEmail(value) {
  checkStringType(value);

  const { trimmedValue, valueLen } = trimAndGetStringLength(value);

  if (trimmedValue === '') {
    return handleValidation(false, '');
  }

  if (
    !(valueLen >= VALID_LENGTH.EMAIL_MIN && valueLen <= VALID_LENGTH.EMAIL_MAX)
  ) {
    return handleValidation(true, VALID_MSG.EMAIL_LENGTH);
  }

  if (!VALID_REGEX.EMAIL_FORMAT.test(trimmedValue)) {
    return handleValidation(true, VALID_MSG.EMAIL_FORMAT);
  }

  return handleValidation(false, '');
}

export default validateEmail;
