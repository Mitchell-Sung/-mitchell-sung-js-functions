// @ts-check

import VALID_LENGTH from '../../consts/validation/validLength.js';
import VALID_MSG from '../../consts/validation/validMessage.js';
import VALID_REGEX from '../../consts/validation/validRegex.js';
import checkStringType from '../checkTypes/checkStringType.js';
import handleValidation from './handleValidation.js';
import trimAndGetStringLength from './trimAndGetStringLength.js';

/**
 * @function validateLastName
 * @param {string} value
 * @returns {{hasError: boolean, errorMessage: string}}
 * @throws {TypeError}
 */
function validateLastName(value) {
  checkStringType(value);

  const { trimmedValue, valueLen } = trimAndGetStringLength(value);

  if (valueLen === 0) {
    return handleValidation(false, '');
  }

  if (
    !(valueLen >= VALID_LENGTH.NAME_MIN && valueLen <= VALID_LENGTH.NAME_MAX)
  ) {
    return handleValidation(true, VALID_MSG.NAME_LENGTH);
  }

  const invalidCharCount = (
    trimmedValue.match(VALID_REGEX.NAME_INVALID_CHAR) || []
  ).length;

  const consecutiveSpaces = trimmedValue.includes('  ');

  if (invalidCharCount > 0) {
    return handleValidation(true, VALID_MSG.INVALID_SYMBOL);
  }

  if (consecutiveSpaces) {
    return handleValidation(true, VALID_MSG.CONSECUTIVE_SPACES);
  }

  return handleValidation(false, '');
}

export default validateLastName;
