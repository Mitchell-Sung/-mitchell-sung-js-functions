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
 * @function validateEmail
 * @description - This function validates the provided email address by checking:
 *  - It must be within the defined minimum and maximum limits.
 *  - It must match the defined pattern (regular expression).
 * @param {string} value - The input string is to be validated as an email address.
 * @returns {ValidationReturnType} The validation result.
 * @throws {Error} If the provided value is not a string.
 */
function validateEmail(value) {
	checkStringType(value);

	const { trimmedValue, valueLen } = trimAndGetStringLength(value);

	const { LENGTH_EMAIL_MIN, LENGTH_EMAIL_MAX } = ValidationLength;
	const { MSG_EMAIL_LENGTH, MSG_EMAIL_FORMAT } = validationMessage;
	const { REGEX_EMAIL_FORMAT } = ValidationRegex;

	if (trimmedValue === '') {
		return handleValidation(false, '');
	}

	if (!(valueLen >= LENGTH_EMAIL_MIN && valueLen <= LENGTH_EMAIL_MAX)) {
		return handleValidation(true, MSG_EMAIL_LENGTH);
	}

	if (!REGEX_EMAIL_FORMAT.test(trimmedValue)) {
		return handleValidation(true, MSG_EMAIL_FORMAT);
	}

	return handleValidation(false, '');
}

export default validateEmail;
