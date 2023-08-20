// @ts-check

import checkBoolType from '../checkTypes/checkBoolType.js';
import checkStringType from '../checkTypes/checkStringType.js';

/**
 * @function handleValidation
 * @param {boolean} condition
 * @param {string} errorMessage
 * @returns {{hasError: boolean, errorMessage: string}}
 * @throws {TypeError}
 */
function handleValidation(condition, errorMessage) {
  checkBoolType(condition);
  checkStringType(errorMessage);

  return { hasError: condition, errorMessage: errorMessage };
}

export default handleValidation;
