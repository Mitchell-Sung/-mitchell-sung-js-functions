// @ts-check

/**
 * @typedef {Object} ValidationReturnType
 * @property {boolean} hasError
 * @property {string} errorMessage
 */

import checkBoolType from '../checkTypes/checkBoolType';
import checkStringType from '../checkTypes/checkStringType';

/**
 * @function handleValidation
 * @description - Validates the provided condition and prepares an error message object.
 * @param {boolean} condition The condition to be checked for validation.
 * @param {string} errorMessage The error message to be returned in case the condition is true.
 * @returns {ValidationReturnType} An object containing a boolean value and an error message.
 * @throws {Error} Throws an error if `condition` is not a boolean or `errorMessage` is not a string.
 */
function handleValidation(condition, errorMessage) {
	checkBoolType(condition);
	checkStringType(errorMessage);

	return { hasError: condition, errorMessage: errorMessage };
}

export default handleValidation;
