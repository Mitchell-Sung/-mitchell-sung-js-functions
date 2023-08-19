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
 * @function validatePassword
 * @description - This function validates the provided password by checking:
 * 	- Its length must fall within the min and max lengths defined in ValidationLength.
 * 	- It must contains at least one uppercase letter.
 * 	- It must contains at least one lowercase letter.
 * 	- It must contains at least one number.
 * 	- It must contains at least one symbol.
 * @param {string} value - The input string to be validated as a password.
 * @returns {ValidationReturnType} - The validation result.
 * @throws {Error} If the provided value is not a string.
 */
function validatePassword(value) {
	checkStringType(value);

	const { trimmedValue, valueLen } = trimAndGetStringLength(value);

	const { LENGTH_PASSWORD_MIN, LENGTH_PASSWORD_MAX } = ValidationLength;
	const {
		MSG_PASSWORD_LENGTH,
		MSG_PASSWORD_UPPERCASE,
		MSG_PASSWORD_LOWERCASE,
		MSG_PASSWORD_NUMBER,
		MSG_PASSWORD_SYMBOL,
		MSG_PASSWORD_EMPTY,
	} = validationMessage;
	const {
		REGEX_PASSWORD_UPPERCASE,
		REGEX_PASSWORD_LOWERCASE,
		REGEX_PASSWORD_NUMBER,
		REGEX_PASSWORD_SYMBOL,
	} = ValidationRegex;

	if (trimmedValue === '') {
		return handleValidation(true, MSG_PASSWORD_EMPTY);
	}

	if (!(valueLen >= LENGTH_PASSWORD_MIN && valueLen <= LENGTH_PASSWORD_MAX)) {
		return handleValidation(true, MSG_PASSWORD_LENGTH);
	}

	if (!REGEX_PASSWORD_UPPERCASE.test(trimmedValue)) {
		return handleValidation(true, MSG_PASSWORD_UPPERCASE);
	}

	if (!REGEX_PASSWORD_LOWERCASE.test(trimmedValue)) {
		return handleValidation(true, MSG_PASSWORD_LOWERCASE);
	}

	if (!REGEX_PASSWORD_NUMBER.test(trimmedValue)) {
		return handleValidation(true, MSG_PASSWORD_NUMBER);
	}

	if (!REGEX_PASSWORD_SYMBOL.test(trimmedValue)) {
		return handleValidation(true, MSG_PASSWORD_SYMBOL);
	}

	return handleValidation(false, '');
}

export default validatePassword;
