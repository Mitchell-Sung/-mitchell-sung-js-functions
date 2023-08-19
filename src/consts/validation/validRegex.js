// @ts-check

/**
 * @const VALID_REGEX
 * @property {RegExp} NAME_INVALID_CHAR
 * @property {RegExp} EMAIL_FORMAT
 * @property {RegExp} USERNAME_INVALID_CHAR
 * @property {RegExp} PASSWORD_UPPERCASE
 * @property {RegExp} PASSWORD_LOWERCASE
 * @property {RegExp} PASSWORD_NUMBER
 * @property {RegExp} PASSWORD_SYMBOL
 * @property {RegExp} SPACE
 */
const VALID_REGEX = Object.freeze({
  NAME_INVALID_CHAR: /[^a-zA-Z ,'"-]/g,
  EMAIL_FORMAT:
    /^(?=.{1,256})(?=.{1,64}@.{1,255}$)(?=.{1,64}[^.]{1,63}@.{1,255}$)(([a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*)|(".*"))@((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,63}$/,
  USERNAME_INVALID_CHAR: /[',!$%^&*()+|~=`{}[\]:";<>?/]/g,
  PASSWORD_UPPERCASE: /[A-Z]/,
  PASSWORD_LOWERCASE: /[a-z]/,
  PASSWORD_NUMBER: /[0-9]/,
  PASSWORD_SYMBOL: /\W/,
  SPACE: /[\s]/g,
});

export default VALID_REGEX;
