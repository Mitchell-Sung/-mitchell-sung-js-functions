import validateLastName from '../../src/libs/validations/validateLastName.js';
import VALID_LENGTH from '../../src/consts/validation/validLength.js';
import VALID_MSG from '../../src/consts/validation/validMessage.js';

describe('validateLastName', () => {
  it('should return no error for last name', () => {
    const input = '';
    const { hasError, errorMessage } = validateLastName(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for the last name that is too short', () => {
    const shortInput = 'm'.repeat(VALID_LENGTH.NAME_MIN - 1);
    const { hasError, errorMessage } = validateLastName(shortInput);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.NAME_LENGTH);
  });

  it('should return an error for the last name that is too long', () => {
    const longInput = 'm'.repeat(VALID_LENGTH.NAME_MAX + 1);
    const { hasError, errorMessage } = validateLastName(longInput);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.NAME_LENGTH);
  });
  it('should return an error for an invalid last name characters', () => {
    const input = '~`!@#$%^&*()=+?<>';
    const { hasError, errorMessage } = validateLastName(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.INVALID_SYMBOL);
  });

  it('should return no error for the last name with single space', () => {
    const input = 'sung middle name';
    const { hasError, errorMessage } = validateLastName(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for consecutive spaces in the last name', () => {
    const input = 'Sun  g';
    const { hasError, errorMessage } = validateLastName(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.CONSECUTIVE_SPACES);
  });

  it('should return no error for the last name', () => {
    const input = 'Sung';
    const { hasError, errorMessage } = validateLastName(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });
});
