// @ts-check

/**
 * @const VALID_LENGTH
 * @property {number} NAME_MIN
 * @property {number} NAME_MAX
 * @property {number} EMAIL_MIN.
 * @property {number} EMAIL_MAX
 * @property {number} USERNAME_MIN
 * @property {number} USERNAME_MAX
 * @property {number} PASSWORD_MIN
 * @property {number} PASSWORD_MAX
 */
const VALID_LENGTH = Object.freeze({
  NAME_MIN: 3,
  NAME_MAX: 24,
  EMAIL_MIN: 10,
  EMAIL_MAX: 50,
  USERNAME_MIN: 8,
  USERNAME_MAX: 100,
  PASSWORD_MIN: 8,
  PASSWORD_MAX: 30,
});

export default VALID_LENGTH;
