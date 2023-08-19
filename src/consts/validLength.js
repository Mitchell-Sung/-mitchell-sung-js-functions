// @ts-check

/**
 * @const VALID_LENGTH
 * @property {number} LENGTH_FIRSTNAME_MIN
 * @property {number} LENGTH_FIRSTNAME_MAX
 * @property {number} LENGTH_LASTNAME_MIN
 * @property {number} LENGTH_LASTNAME_MAX
 * @property {number} LENGTH_EMAIL_MIN.
 * @property {number} LENGTH_EMAIL_MAX
 * @property {number} LENGTH_USERNAME_MIN
 * @property {number} LENGTH_USERNAME_MAX
 * @property {number} LENGTH_PASSWORD_MIN
 * @property {number} LENGTH_PASSWORD_MAX
 */
const VALID_LENGTH = Object.freeze({
  FIRSTNAME_MIN: 3,
  FIRSTNAME_MAX: 24,
  LASTNAME_MIN: 3,
  LASTNAME_MAX: 24,
  EMAIL_MIN: 10,
  EMAIL_MAX: 100,
  USERNAME_MIN: 8,
  USERNAME_MAX: 100,
  PASSWORD_MIN: 8,
  PASSWORD_MAX: 30,
});

export default VALID_LENGTH;
