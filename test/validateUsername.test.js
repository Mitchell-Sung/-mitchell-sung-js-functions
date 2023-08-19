import validateUsername from '../src/libs/validations/validateUsername';
import ValidationLength from '../src/consts/validationLength';
import validationMessage from '../src/consts/validationMessage';

const { LENGTH_USERNAME_MIN, LENGTH_USERNAME_MAX } = ValidationLength;
const { MSG_USERNAME_LENGTH, MSG_USERNAME_SYMBOL, MSG_USERNAME_SPACE } = validationMessage;

describe('validateUsername', () => {
	it('should return no error for the username', () => {
		const input = '';
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});

	it('should return an error for the username that is too short', () => {
		const input = 'm'.repeat(LENGTH_USERNAME_MIN - 1);
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_USERNAME_LENGTH);
	});

	it('should return an error for the username that is too long', () => {
		const input = 'm'.repeat(LENGTH_USERNAME_MAX + 1);
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_USERNAME_LENGTH);
	});

	it('should return an error for an invalid username characters', () => {
		// const input = '",!$%^&*()+|~=`{}[]\\:";<>?/"';
		const input = 'mitchell!';
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_USERNAME_SYMBOL);
	});

	it('should return an error for a username space', () => {
		const input = 'mit chell';
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_USERNAME_SPACE);
	});

	it('should return no error for the username', () => {
		const input = 'mitchell.sung@gmail.com';
		const { hasError, errorMessage } = validateUsername(input);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});
});
