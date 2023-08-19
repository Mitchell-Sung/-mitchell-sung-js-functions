// @ts-check

/**
 * @function checkBoolType
 * @description Checks if all provided arguments are of boolean type.
 * @param {...any} values The values to be checked.
 * @returns {void}
 * @throws {Error} Throw an error if one of the arguments is not of boolean type.
 */
function checkBoolType(...values) {
	values.forEach((value, index) => {
		if (typeof value !== 'boolean') {
			throw new Error(`Value at index ${index} is not of boolean type, it's a ${typeof value}!`);
		}
	});
}

export default checkBoolType;
