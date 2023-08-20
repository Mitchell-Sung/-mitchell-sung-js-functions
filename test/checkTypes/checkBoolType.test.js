import checkBoolType from '../../src/libs/checkTypes/checkBoolType.js'; // Adjust this path

describe('checkBoolType', () => {
  it('should not throw an error if all arguments are of boolean type', () => {
    expect(() => checkBoolType(true, false, true, false)).not.toThrow();
  });

  it('should throw an error if one of the arguments is not of boolean type', () => {
    expect(() => checkBoolType(true, false, 'string')).toThrow(
      "Value at index 2 is not of boolean type, it's a string!"
    );
    expect(() => checkBoolType(true, false, 1234)).toThrow(
      "Value at index 2 is not of boolean type, it's a number!"
    );
    expect(() => checkBoolType(true, false, {})).toThrow(
      "Value at index 2 is not of boolean type, it's a object!"
    );
    expect(() => checkBoolType(true, false, [])).toThrow(
      "Value at index 2 is not of boolean type, it's a object!"
    );
    expect(() => checkBoolType(true, false, null)).toThrow(
      "Value at index 2 is not of boolean type, it's a object!"
    );
    expect(() => checkBoolType(true, false, undefined)).toThrow(
      "Value at index 2 is not of boolean type, it's a undefined!"
    );
  });
});
