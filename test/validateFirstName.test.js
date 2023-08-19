import validateFirstName from '../src/libs/validations/validateFirstName';
import ValidationLength from '../src/consts/validationLength';
import validationMessage from '../src/consts/validationMessage';

const { LENGTH_FIRSTNAME_MIN, LENGTH_FIRSTNAME_MAX } = ValidationLength;
const { MSG_FIRSTNAME_LENGTH, MSG_NAME_INVALID_SYMBOL, MSG_CONSECUTIVE_SPACES } = validationMessage;

describe('validateFirstName', () => {
	it('should return no error for the first name', () => {
		const emptyFirstname = '';
		const { hasError, errorMessage } = validateFirstName(emptyFirstname);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});

	it('should return an error for the first name that is too short', () => {
		const shortInput = 'm'.repeat(LENGTH_FIRSTNAME_MIN - 1);
		const { hasError, errorMessage } = validateFirstName(shortInput);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_FIRSTNAME_LENGTH);
	});

	it('should return an error for the first name that is too long', () => {
		const longInput = 'm'.repeat(LENGTH_FIRSTNAME_MAX + 1);
		const { hasError, errorMessage } = validateFirstName(longInput);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_FIRSTNAME_LENGTH);
	});

	it('should return an error for an invalid first name characters', () => {
		const input = '~`!@#$%^&*()=+?<>';
		const { hasError, errorMessage } = validateFirstName(input);
		expect(hasError).toBe(true);
		expect(errorMessage).toBe(MSG_NAME_INVALID_SYMBOL);
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
		expect(errorMessage).toBe(MSG_CONSECUTIVE_SPACES);
	});

	it('should return no error for the first name', () => {
		const input = 'mitchell';
		const { hasError, errorMessage } = validateFirstName(input);
		expect(hasError).toBe(false);
		expect(errorMessage).toBe('');
	});
});
