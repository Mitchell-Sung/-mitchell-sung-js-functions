import handleValidation from '../../src/libs/validations/handleValidation.js';

describe('handleValidation', () => {
  it('should throw an error if condition is not a boolean', () => {
    expect(() => handleValidation('notBoolean', 'errorMessage')).toThrow();
    expect(() => handleValidation(1234, 'errorMessage')).toThrow();
    expect(() => handleValidation({}, 'errorMessage')).toThrow();
    expect(() => handleValidation([], 'errorMessage')).toThrow();
    expect(() => handleValidation(null, 'errorMessage')).toThrow();
    expect(() => handleValidation(undefined, 'errorMessage')).toThrow();
  });

  it('should throw an error if errorMessage is not a string', () => {
    expect(() => handleValidation(true, 123)).toThrow();
    expect(() => handleValidation(true, {})).toThrow();
    expect(() => handleValidation(true, [])).toThrow();
    expect(() => handleValidation(true, null)).toThrow();
    expect(() => handleValidation(true, undefined)).toThrow();
  });

  it('should return an object with properties hasError and errorMessage', () => {
    const result = handleValidation(true, 'some error message');
    expect(result).toHaveProperty('hasError');
    expect(result).toHaveProperty('errorMessage');
  });

  it('should return correct values for hasError and errorMessage', () => {
    const condition = false;
    const errorMessage = 'No error';
    const result = handleValidation(condition, errorMessage);
    expect(result.hasError).toBe(condition);
    expect(result.errorMessage).toBe(errorMessage);
  });
});
