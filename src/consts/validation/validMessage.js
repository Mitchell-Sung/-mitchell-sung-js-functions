// @ts-check

import VALID_LENGTH from './validLength';

/**
 * @const VALID_MSG
 * @property {string} REQUIRED
 * @property {string} NAME_LENGTH
 * @property {string} CONSECUTIVE_SPACES
 * @property {string} INVALID_SYMBOL
 * @property {string} EMAIL_LENGTH
 * @property {string} EMAIL_FORMAT
 * @property {string} USERNAME_LENGTH
 * @property {string} USERNAME_SYMBOL
 * @property {string} USERNAME_SPACE
 * @property {string} PASSWORD_LENGTH
 * @property {string} PASSWORD_UPPERCASE
 * @property {string} PASSWORD_LOWERCASE
 * @property {string} PASSWORD_NUMBER
 * @property {string} PASSWORD_SYMBOL
 */
const VALID_MSG = Object.freeze({
  REQUIRED: 'Input is required',
  NAME_LENGTH: `Name must be between ${VALID_LENGTH.NAME_MIN} and ${VALID_LENGTH.NAME_MAX} characters!`,
  CONSECUTIVE_SPACES: `Multiple consecutive spaces are not allowed!`,
  INVALID_SYMBOL: `Invalid characters detected!`,
  EMAIL_LENGTH: `Email must be between ${VALID_LENGTH.EMAIL_MIN} and ${VALID_LENGTH.EMAIL_MAX} characters!`,
  EMAIL_FORMAT: `Invalid email format!`,
  USERNAME_LENGTH: `Username must be between ${VALID_LENGTH.USERNAME_MIN} and ${VALID_LENGTH.USERNAME_MAX} characters!`,
  USERNAME_SYMBOL: `Username can only include dots, dashes, underscores, and the at sign!`,
  USERNAME_SPACE: 'Spaces are not allowed in the username!',
  PASSWORD_LENGTH: `Password must be between ${VALID_LENGTH.PASSWORD_MIN} and ${VALID_LENGTH.PASSWORD_MAX} characters!`,
  PASSWORD_UPPERCASE: 'Password must contain at least one uppercase letter.',
  PASSWORD_LOWERCASE: 'Password must contain at least one lowercase letter.',
  PASSWORD_NUMBER: 'Password must contain at least one number.',
  PASSWORD_SYMBOL: 'Password must contain at least one symbol.',
});

export default VALID_MSG;
