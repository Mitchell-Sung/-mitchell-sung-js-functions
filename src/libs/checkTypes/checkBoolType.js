// @ts-check

/**
 * @function checkBoolType
 * @description
 * @param {...*} values
 * @returns {void}
 * @throws {TypeError}
 */
function checkBoolType(...values) {
  values.some((value, index) => {
    if (typeof value !== 'boolean') {
      throw new TypeError(
        `Value at index ${index} is not of boolean type, it's a ${typeof value}!`
      );
    }
  });
}

export default checkBoolType;
