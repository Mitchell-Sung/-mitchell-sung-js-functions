import checkStringType from '../../src/libs/checkTypes/checkStringType.js';

describe('checkStringType', () => {
  it('should not throw an error if all arguments are of string type', () => {
    expect(() => checkStringType('this', 'is', 'a', 'string')).not.toThrow();
  });

  it('should throw an error if one of the arguments is not of string type', () => {
    expect(() => checkStringType('hello', true, 'string')).toThrow(
      "Value at index 1 is not of string type, it's a boolean!"
    );
    expect(() => checkStringType('hello', 1234, 'string')).toThrow(
      "Value at index 1 is not of string type, it's a number!"
    );
    expect(() => checkStringType('hello', {}, 'string')).toThrow(
      "Value at index 1 is not of string type, it's a object!"
    );
    expect(() => checkStringType('hello', [], 'string')).toThrow(
      "Value at index 1 is not of string type, it's a object!"
    );
    expect(() => checkStringType('hello', null, 'string')).toThrow(
      "Value at index 1 is not of string type, it's a object!"
    );
    expect(() => checkStringType('hello', undefined, 'string')).toThrow(
      "Value at index 1 is not of string type, it's a undefined!"
    );
  });
});
