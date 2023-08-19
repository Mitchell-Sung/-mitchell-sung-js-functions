import validateLastName from '../src/libs/validations/validateLastName';
import ValidationLength from '../src/consts/validationLength';
import validationMessage from '../src/consts/validationMessage';

const { LENGTH_LASTNAME_MIN, LENGTH_LASTNAME_MAX } = ValidationLength;
const { MSG_LASTNAME_LENGTH, MSG_NAME_INVALID_SYMBOL, MSG_CONSECUTIVE_SPACES } = validationMessage;

describe('validateLastName', () => {
	it('should return no error for last name', () => {
		const input = '';
		const { hasError, errorMessage } = validateLastName(input);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});

	it('should return an error for the last name that is too short', () => {
		const shortInput = 'm'.repeat(LENGTH_LASTNAME_MIN - 1);
		const { hasError, errorMessage } = validateLastName(shortInput);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_LASTNAME_LENGTH);
	});

	it('should return an error for the last name that is too long', () => {
		const longInput = 'm'.repeat(LENGTH_LASTNAME_MAX + 1);
		const { hasError, errorMessage } = validateLastName(longInput);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_LASTNAME_LENGTH);
	});
	it('should return an error for an invalid last name characters', () => {
		const input = '~`!@#$%^&*()=+?<>';
		const { hasError, errorMessage } = validateLastName(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_NAME_INVALID_SYMBOL);
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
		expect(errorMessage).toBe(MSG_CONSECUTIVE_SPACES);
	});

	it('should return no error for the last name', () => {
		const input = 'Sung';
		const { hasError, errorMessage } = validateLastName(input);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});
});
