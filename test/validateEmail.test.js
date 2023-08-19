import validateEmail from '../src/libs/validations/validateEmail';
import ValidationLength from '../src/consts/validationLength';
import validationMessage from '../src/consts/validationMessage';

const { LENGTH_EMAIL_MIN, LENGTH_EMAIL_MAX } = ValidationLength;
const { MSG_EMAIL_LENGTH, MSG_EMAIL_FORMAT } = validationMessage;

describe('validateEmail', () => {
  it('should return no error for an empty email', () => {
    const { hasError, errorMessage } = validateEmail('');
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for an email that is too short', () => {
    const shortEmail = 'm'.repeat(LENGTH_EMAIL_MIN - 1);
    const { hasError, errorMessage } = validateEmail(shortEmail);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(MSG_EMAIL_LENGTH);
  });

  it('should return an error for an email that is too long', () => {
    const longEmail = 'm'.repeat(LENGTH_EMAIL_MAX + 1) + '@example.com';
    const { hasError, errorMessage } = validateEmail(longEmail);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(MSG_EMAIL_LENGTH);
  });

  it('should return an error for an invalid email format', () => {
    const { hasError, errorMessage } = validateEmail('testInvalidEmail');
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(MSG_EMAIL_FORMAT);
  });

  it('should return no error for a valid email format', () => {
    const { hasError, errorMessage } = validateEmail(
      'testEmailValidation@gmail.com'
    );
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });
});
