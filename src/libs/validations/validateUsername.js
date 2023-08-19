// @ts-check

/**
 * @typedef {Object} ValidationReturnType
 * @property {boolean} hasError
 * @property {string} errorMessage
 */

import ValidationLength from '../../consts/validationLength';
import validationMessage from '../../consts/validationMessage';
import ValidationRegex from '../../consts/validationRegex';
import checkStringType from '../checkTypes/checkStringType';
import handleValidation from '../validations/handleValidation';
import trimAndGetStringLength from '../validations/trimAndGetStringLength';

/**
 * @function validateUsername
 * @description - This function validates the provided password by checking:
 *  - It must be a string.
 *  - It should not be an empty string after trimming white spaces.
 *  - Its length must be within a predefined minimum and maximum length.
 *  - It should not contain any invalid characters as defined by a regular expression.
 *  - It should not contain any spaces.
 * @param {string} value - The input string to be validated as an username.
 * @returns {ValidationReturnType} - The validation result.
 * @throws {Error} If the provided value is not a string.
 */
function validateUsername(value) {
	checkStringType(value);

	const { trimmedValue, valueLen } = trimAndGetStringLength(value);

	const { LENGTH_USERNAME_MIN, LENGTH_USERNAME_MAX } = ValidationLength;
	const { MSG_USERNAME_LENGTH, MSG_USERNAME_SYMBOL, MSG_USERNAME_SPACE } = validationMessage;
	const { REGEX_USERNAME_INVALID_CHAR, REGEX_SPACE } = ValidationRegex;

	if (valueLen === 0) {
		return handleValidation(false, '');
	}

	if (!(valueLen >= LENGTH_USERNAME_MIN && valueLen <= LENGTH_USERNAME_MAX)) {
		return handleValidation(true, MSG_USERNAME_LENGTH);
	}

	const invalidCharCount = (trimmedValue.match(REGEX_USERNAME_INVALID_CHAR) || []).length;
	const spaceCount = (trimmedValue.match(REGEX_SPACE) || []).length;

	if (invalidCharCount > 0) {
		return handleValidation(true, MSG_USERNAME_SYMBOL);
	}

	if (spaceCount > 0) {
		return handleValidation(true, MSG_USERNAME_SPACE);
	}

	return handleValidation(false, '');
}

export default validateUsername;
