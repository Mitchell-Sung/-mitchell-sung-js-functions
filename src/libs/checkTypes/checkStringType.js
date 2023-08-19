// @ts-check

/**
 * @function checkStringType
 * @description Check if all provided values are of type string.
 * @param {...any} values - The values to be checked.
 * @returns {void}
 * @throws {Error} Throw an error if any non-string type is found.
 */
function checkStringType(...values) {
	values.forEach((value, index) => {
		if (typeof value !== 'string') {
			throw new Error(`Value at index ${index} is not of string type, it's a ${typeof value}!`);
		}
	});
}

export default checkStringType;
