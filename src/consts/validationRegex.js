// @ts-check

/**
 * @typedef {Object} ValidationRegex
 * @property {RegExp} REGEX_NAME_INVALID_CHAR - Regular expression to check for invalid characters in names. It only allows letters, spaces, commas, hyphens, and double quotes.
 * @property {RegExp} REGEX_EMAIL_FORMAT - Regular expression for email validation. It allows alphanumeric characters, '.', '_', '%', '+', and '-'. Then an '@', followed by more alphanumeric characters, then '.', and two or more alphabetic characters for the domain part.
 * @property {RegExp} REGEX_USERNAME_INVALID_CHAR - Regular expression to check for invalid characters in usernames. It disallows a set of special characters.
 * @property {RegExp} REGEX_PASSWORD_UPPERCASE - Regular expression to check for at least one uppercase character in passwords.
 * @property {RegExp} REGEX_PASSWORD_LOWERCASE - Regular expression to check for at least one lowercase character in passwords.
 * @property {RegExp} REGEX_PASSWORD_NUMBER - Regular expression to check for at least one numeric character in passwords.
 * @property {RegExp} REGEX_PASSWORD_SYMBOL - Regular expression to check for at least one special character in passwords.
 * @property {RegExp} REGEX_SPACE - Regular expression to check for spaces. Useful for fields where space is not allowed.
 */

/**
 * @type {ValidationRegex}
 */
const ValidationRegex = Object.freeze({
	REGEX_NAME_INVALID_CHAR: /[^a-zA-Z ,'"-]/g,
	REGEX_EMAIL_FORMAT: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	REGEX_USERNAME_INVALID_CHAR: /[',!$%^&*()+|~=`{}[\]:";<>?/]/g,
	REGEX_PASSWORD_UPPERCASE: /[A-Z]/,
	REGEX_PASSWORD_LOWERCASE: /[a-z]/,
	REGEX_PASSWORD_NUMBER: /[0-9]/,
	REGEX_PASSWORD_SYMBOL: /\W/,
	REGEX_SPACE: /[\s]/g,
});

export default ValidationRegex;
