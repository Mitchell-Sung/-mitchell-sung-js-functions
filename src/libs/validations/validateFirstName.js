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
 * @function validateFirstName
 * @description - This function validates the provided first name by checking:
 *  - It must not be an empty string after trimming.
 * 	- Its length must fall within the min and max lengths defined in ValidationLength.
 * 	- It must not contain invalid characters as defined by the REGEX_NAME_INVALID_CHAR pattern.
 * 	- It must not contain consecutive spaces.
 * @param {string} value - The input string to be validated as a first name.
 * @returns {ValidationReturnType} The validation result.
 * @throws {Error} If the provided value is not a string.
 */
function validateFirstName(value) {
	checkStringType(value);

	const { trimmedValue, valueLen } = trimAndGetStringLength(value);

	const { LENGTH_FIRSTNAME_MIN, LENGTH_FIRSTNAME_MAX } = ValidationLength;
	const { MSG_FIRSTNAME_LENGTH, MSG_NAME_INVALID_SYMBOL, MSG_CONSECUTIVE_SPACES } =
		validationMessage;
	const { REGEX_NAME_INVALID_CHAR } = ValidationRegex;

	if (valueLen === 0) {
		return handleValidation(false, '');
	}

	if (!(valueLen >= LENGTH_FIRSTNAME_MIN && valueLen <= LENGTH_FIRSTNAME_MAX)) {
		return handleValidation(true, MSG_FIRSTNAME_LENGTH);
	}

	const invalidCharCount = (trimmedValue.match(REGEX_NAME_INVALID_CHAR) || []).length;
	const consecutiveSpaces = trimmedValue.includes('  ');

	if (invalidCharCount > 0) {
		return handleValidation(true, MSG_NAME_INVALID_SYMBOL);
	}

	if (consecutiveSpaces) {
		return handleValidation(true, MSG_CONSECUTIVE_SPACES);
	}

	return handleValidation(false, '');
}

export default validateFirstName;
