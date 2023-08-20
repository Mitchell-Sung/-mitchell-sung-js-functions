// @ts-check

/**
 * @typedef {Object} ValidationReturnType
 * @property {boolean} hasError
 * @property {string} errorMessage
 */

import VALID_LENGTH from '../../consts/validation/validLength.js';
import VALID_REGEX from '../../consts/validation/validRegex.js';
import VALID_MSG from '../../consts/validation/validMessage.js';
import checkStringType from '../checkTypes/checkStringType.js';
import handleValidation from './handleValidation.js';
import trimAndGetStringLength from './trimAndGetStringLength.js';

/**
 * @function validateUsername
 * @param {string} value
 * @returns {{hasError: boolean, errorMessage: string}}
 * @throws {TypeError}
 */
function validateUsername(value) {
  checkStringType(value);

  const { trimmedValue, valueLen } = trimAndGetStringLength(value);

  if (valueLen === 0) {
    return handleValidation(false, '');
  }

  if (
    !(
      valueLen >= VALID_LENGTH.USERNAME_MIN &&
      valueLen <= VALID_LENGTH.USERNAME_MAX
    )
  ) {
    return handleValidation(true, VALID_MSG.USERNAME_LENGTH);
  }

  const invalidCharCount = (
    trimmedValue.match(VALID_REGEX.USERNAME_INVALID_CHAR) || []
  ).length;

  const spaceCount = (trimmedValue.match(VALID_REGEX.SPACE) || []).length;

  if (invalidCharCount > 0) {
    return handleValidation(true, VALID_MSG.USERNAME_SYMBOL);
  }

  if (spaceCount > 0) {
    return handleValidation(true, VALID_MSG.USERNAME_SPACE);
  }

  return handleValidation(false, '');
}

export default validateUsername;
