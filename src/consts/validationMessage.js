// @ts-check

/**
 * @description -  An object type representing a collection of validation messages for user input.
 * @typedef {Object} validationMessageType
 * @property {string} MSG_FIRSTNAME_LENGTH - Message when first name length is not valid.
 * @property {string} MSG_LASTNAME_LENGTH - Message when last name length is not valid.
 * @property {string} MSG_CONSECUTIVE_SPACES - Message when consecutive spaces are found.
 * @property {string} MSG_NAME_INVALID_SYMBOL - Message when an invalid symbol is found in name.
 * @property {string} MSG_EMAIL_LENGTH - Message when email length is not valid.
 * @property {string} MSG_EMAIL_FORMAT - Message when email format is not valid.
 * @property {string} MSG_USERNAME_LENGTH - Message when username length is not valid.
 * @property {string} MSG_USERNAME_SYMBOL - Message when an invalid symbol is found in username.
 * @property {string} MSG_USERNAME_SPACE - Message when a space is found in username.
 * @property {string} MSG_PASSWORD_EMPTY - Message when no password is provided.
 * @property {string} MSG_PASSWORD_LENGTH - Message when password length is not valid.
 * @property {string} MSG_PASSWORD_UPPERCASE - Message when password does not have an uppercase letter.
 * @property {string} MSG_PASSWORD_LOWERCASE - Message when password does not have a lowercase letter.
 * @property {string} MSG_PASSWORD_NUMBER - Message when password does not have a number.
 * @property {string} MSG_PASSWORD_SYMBOL - Message when password does not have a symbol.
 */

/**
 * @readonly
 * @type {Readonly<validationMessageType>}
 */
const validationMessage = Object.freeze({
	MSG_FIRSTNAME_LENGTH: 'First name must be minimum 3 characters and maximum 24 characters',
	MSG_LASTNAME_LENGTH: 'Last name must be minimum 3 characters and maximum 24 characters',
	MSG_CONSECUTIVE_SPACES: 'Multiple consecutive spaces are not allowed',
	MSG_NAME_INVALID_SYMBOL:
		'Invalid characters detected. Only alphabets and the symbols ",", "-", and "\'" are allowed',
	MSG_EMAIL_LENGTH: 'Email must be minimum 10 characters and maximum 100 characters',
	MSG_EMAIL_FORMAT: 'Invalid email format (ex, text@gmail.com)',
	MSG_USERNAME_LENGTH: 'Username must be minimum 8 characters and maximum 100 characters',
	MSG_USERNAME_SYMBOL: 'Only allow dot, dash, underbar, and at sign',
	MSG_USERNAME_SPACE: 'No space is allowed.',
	MSG_PASSWORD_EMPTY: 'Password required',
	MSG_PASSWORD_LENGTH: 'Password must be minimum 8 characters and maximum 30 characters',
	MSG_PASSWORD_UPPERCASE: 'Password must be minimum 1 uppercase letter',
	MSG_PASSWORD_LOWERCASE: 'Password must be minimum 1 lowercase letter',
	MSG_PASSWORD_NUMBER: 'Password must be minimum 1 number',
	MSG_PASSWORD_SYMBOL: 'Password must be minimum 1 symbol',
});

export default validationMessage;
