import validatePassword from '../../src/libs/validations/validatePassword.js';
import VALID_LENGTH from '../../src/consts/validation/validLength.js';
import VALID_MSG from '../../src/consts/validation/validMessage.js';

describe('validatePassword', () => {
  it('should return an empty errror for a valid password', () => {
    const input = '';
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.REQUIRED);
  });

  it('should return an error for the password that is too short', () => {
    const input = 'm'.repeat(VALID_LENGTH.PASSWORD_MIN - 1);
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_LENGTH);
  });

  it('should return an error for the password that is too long', () => {
    const input = 'm'.repeat(VALID_LENGTH.PASSWORD_MAX + 1);
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_LENGTH);
  });

  it('should return an error for the missing uppercase in the password', () => {
    const input = 'password1!';
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_UPPERCASE);
  });

  it('should return an error for the missing lowercase in the password', () => {
    const input = 'PASSWORD1!';
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_LOWERCASE);
  });

  it('should return an error for the missing number in the password', () => {
    const input = 'Password!';
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_NUMBER);
  });

  it('should return an error for the missing symbol in the password', () => {
    const input = 'Password1';
    const { hasError, errorMessage } = validatePassword(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.PASSWORD_SYMBOL);
  });
});
