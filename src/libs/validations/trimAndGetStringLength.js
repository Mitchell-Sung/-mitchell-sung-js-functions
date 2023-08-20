// @ts-check

import checkStringType from '../checkTypes/checkStringType.js';

/**
 * @function trimAndGetStringLength
 * @param {string} value
 * @returns {{trimmedValue: string, valueLen: number}}
 * @throws {TypeError}
 */
function trimAndGetStringLength(value) {
  checkStringType(value);

  const trimmedValue = value.trim();
  const valueLen = trimmedValue.length;

  return { trimmedValue, valueLen };
}

export default trimAndGetStringLength;
