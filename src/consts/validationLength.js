// @ts-check

/**
 * @typedef {Object} ValidationLengthType
 * @description An object type that specifies min/max length restrictions for various attributes.
 * @property {number} LENGTH_FIRSTNAME_MIN - Minimum length for a first name.
 * @property {number} LENGTH_FIRSTNAME_MAX - Maximum length for a first name.
 * @property {number} LENGTH_LASTNAME_MIN - Minimum length for a last name.
 * @property {number} LENGTH_LASTNAME_MAX - Maximum length for a last name.
 * @property {number} LENGTH_EMAIL_MIN - Minimum length for an email address.
 * @property {number} LENGTH_EMAIL_MAX - Maximum length for an email address.
 * @property {number} LENGTH_USERNAME_MIN - Minimum length for a username.
 * @property {number} LENGTH_USERNAME_MAX - Maximum length for a username.
 * @property {number} LENGTH_PASSWORD_MIN - Maximum length for a password.
 * @property {number} LENGTH_PASSWORD_MAX - Maximum length for a password.
 */

/**
 * @readOnly
 * @type {Readonly<ValidationLengthType>}
 */
const ValidationLength = Object.freeze({
	LENGTH_FIRSTNAME_MIN: 3,
	LENGTH_FIRSTNAME_MAX: 24,
	LENGTH_LASTNAME_MIN: 3,
	LENGTH_LASTNAME_MAX: 24,
	LENGTH_EMAIL_MIN: 10,
	LENGTH_EMAIL_MAX: 100,
	LENGTH_USERNAME_MIN: 8,
	LENGTH_USERNAME_MAX: 100,
	LENGTH_PASSWORD_MIN: 8,
	LENGTH_PASSWORD_MAX: 30,
});

export default ValidationLength;
