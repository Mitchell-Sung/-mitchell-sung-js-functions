import validateUsername from '../../src/libs/validations/validateUsername.js';
import VALID_LENGTH from '../../src/consts/validation/validLength.js';
import VALID_MSG from '../../src/consts/validation/validMessage.js';

describe('validateUsername', () => {
  it('should return no error for the username', () => {
    const input = '';
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });

  it('should return an error for the username that is too short', () => {
    const input = 'm'.repeat(VALID_LENGTH.USERNAME_MIN - 1);
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.USERNAME_LENGTH);
  });

  it('should return an error for the username that is too long', () => {
    const input = 'm'.repeat(VALID_LENGTH.USERNAME_MAX + 1);
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.USERNAME_LENGTH);
  });

  it('should return an error for an invalid username characters', () => {
    const input = 'mitchell!';
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.USERNAME_SYMBOL);
  });

  it('should return an error for a username space', () => {
    const input = 'mit chell';
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(true);
    expect(errorMessage).toBe(VALID_MSG.USERNAME_SPACE);
  });

  it('should return no error for the username', () => {
    const input = 'mitchell.sung@gmail.com';
    const { hasError, errorMessage } = validateUsername(input);
    expect(hasError).toBe(false);
    expect(errorMessage).toBe('');
  });
});
