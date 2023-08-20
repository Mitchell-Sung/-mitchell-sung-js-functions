import validateEmail from '../../src/libs/validations/validateEmail.js';
import VALID_LENGTH from '../../src/consts/validation/validLength.js';
import VALID_MSG from '../../src/consts/validation/validMessage.js';

describe('validateEmail', () => {
  it('should return no error for an empty email', () => {
    const { hasError, errorMessage } = validateEmail('');
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for an email that is too short', () => {
    const shortEmail = 'm'.repeat(VALID_LENGTH.EMAIL_MIN - 1);
    const { hasError, errorMessage } = validateEmail(shortEmail);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.EMAIL_LENGTH);
  });

  it('should return an error for an email that is too long', () => {
    const longEmail = 'm'.repeat(VALID_LENGTH.EMAIL_MAX + 1) + '@example.com';
    const { hasError, errorMessage } = validateEmail(longEmail);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.EMAIL_LENGTH);
  });

  it('should return an error for an invalid email format', () => {
    const { hasError, errorMessage } = validateEmail('testInvalidEmail');
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.EMAIL_FORMAT);
  });

  it('should return no error for a valid email format', () => {
    const { hasError, errorMessage } = validateEmail(
      'testEmailValidation@gmail.com'
    );
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });
});
