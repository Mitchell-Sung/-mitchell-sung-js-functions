// @ts-check

/**
 * @typedef {Object} trimAndGetStringLengthReturnType
 * @property {string} trimmedValue - The input string with leading and trailing whitespaces removed.
 * @property {number} valueLen - The length of the trimmed string.
 */

import checkStringType from '../checkTypes/checkStringType';

/**
 * @function trimAndGetStringLength
 * @description - Trims a string and measures its length.
 *  - Removes any leading or trailing whitespaces.
 *  - Measures the resulting string's length.
 *  - Returns an object containing the trimmed string and its length.
 * @param {string} value - The string to trim and measure.
 * @returns {trimAndGetStringLengthReturnType} Contain a string value and length number.
 * @throws {Error} If the provided value is not a string.
 */
function trimAndGetStringLength(value) {
	checkStringType(value);

	const trimmedValue = value.trim();
	const valueLen = trimmedValue.length;

	return { trimmedValue, valueLen };
}

export default trimAndGetStringLength;
