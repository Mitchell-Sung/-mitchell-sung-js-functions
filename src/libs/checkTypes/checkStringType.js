// @ts-check

/**
 * @function checkStringType
 * @param {...*} values
 * @returns {void}
 * @throws {TypeError}
 */
function checkStringType(...values) {
  values.some((value, index) => {
    if (typeof value !== 'string') {
      throw new TypeError(
        `Value at index ${index} is not of string type, it's a ${typeof value}!`
      );
    }
  });
}

export default checkStringType;
