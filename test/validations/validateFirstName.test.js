import validateFirstName from '../../src/libs/validations/validateFirstName.js';
import VALID_LENGTH from '../../src/consts/validation/validLength.js';
import VALID_MSG from '../../src/consts/validation/validMessage.js';

describe('validateFirstName', () => {
  it('should return no error for the first name', () => {
    const emptyFirstname = '';
    const { hasError, errorMessage } = validateFirstName(emptyFirstname);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for the first name that is too short', () => {
    const shortInput = 'm'.repeat(VALID_LENGTH.NAME_MIN - 1);
    const { hasError, errorMessage } = validateFirstName(shortInput);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.NAME_LENGTH);
  });

  it('should return an error for the first name that is too long', () => {
    const longInput = 'm'.repeat(VALID_LENGTH.NAME_MAX + 1);
    const { hasError, errorMessage } = validateFirstName(longInput);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.NAME_LENGTH);
  });

  it('should return an error for an invalid first name characters', () => {
    const input = '~`!@#$%^&*()=+?<>';
    const { hasError, errorMessage } = validateFirstName(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.INVALID_SYMBOL);
  });

  it('should return no error for the first name with single space', () => {
    const input = 'mit chell';
    const { hasError, errorMessage } = validateFirstName(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for consecutive spaces in the first name', () => {
    const input = 'mit  chell';
    const { hasError, errorMessage } = validateFirstName(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.CONSECUTIVE_SPACES);
  });

  it('should return no error for the first name', () => {
    const input = 'mitchell';
    const { hasError, errorMessage } = validateFirstName(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });
});
