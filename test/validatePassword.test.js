import validatePassword from '../src/libs/validations/validatePassword';
import ValidationLength from '../src/consts/validationLength';
import validationMessage from '../src/consts/validationMessage';

const { LENGTH_PASSWORD_MIN, LENGTH_PASSWORD_MAX } = ValidationLength;
const {
	MSG_PASSWORD_EMPTY,
	MSG_PASSWORD_LENGTH,
	MSG_PASSWORD_UPPERCASE,
	MSG_PASSWORD_LOWERCASE,
	MSG_PASSWORD_NUMBER,
	MSG_PASSWORD_SYMBOL,
} = validationMessage;

describe('validatePassword', () => {
	it('should return an empty errror for a valid password', () => {
		const input = '';
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_EMPTY);
	});

	it('should return an error for the password that is too short', () => {
		const input = 'm'.repeat(LENGTH_PASSWORD_MIN - 1);
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_LENGTH);
	});

	it('should return an error for the password that is too long', () => {
		const input = 'm'.repeat(LENGTH_PASSWORD_MAX + 1);
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_LENGTH);
	});

	it('should return an error for the missing uppercase in the password', () => {
		const input = 'password1!';
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_UPPERCASE);
	});

	it('should return an error for the missing lowercase in the password', () => {
		const input = 'PASSWORD1!';
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_LOWERCASE);
	});

	it('should return an error for the missing number in the password', () => {
		const input = 'Password!';
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_NUMBER);
	});

	it('should return an error for the missing symbol in the password', () => {
		const input = 'Password1';
		const { hasError, errorMessage } = validatePassword(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_PASSWORD_SYMBOL);
	});
});
