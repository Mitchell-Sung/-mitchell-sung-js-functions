# @mitchell-sung/functions

The <code>@mitchell-sung/functions</code> library provides developers with an all-encompassing suite of functions.

## Installation

```bash
npm install @mitchell-sung/functions
```

## Basic Usage

```javascript
import { validateUsername } from '@mitchell-sung/functions';

const func_name = () => {
	const inputUsername = 'mitchell@streamdata.com';

	const res = validateUsername(inputUsername);

	console.log('hasError :>> ', res.hasError); // true or false
	console.log('errorMessage :>> ', res.errorMessage); // "Error messages..."
};
```

```javascript
var { VALID_MSG } = require('@mitchell-sung/functions');

function func_name() {
	console.log(VALID_MSG.SELECTOR_REQUIRED);
	// Result : "At least one option must be selected."
}
```

## API Documentation

### Validations

> <div style="font-size: 1.3rem;">validateFirstName()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input conforms to the accepted standards for a first name, ensuring it contains only alphabetical characters and no special symbols or numbers.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">validateLastName()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input conforms to the accepted standards for a last name, ensuring it contains only alphabetical characters and no special symbols or numbers.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">validateUsername()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input adheres to the prescribed criteria for usernames, such as length, allowed characters, and the absence of prohibited symbols.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">validateEmail()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input is a valid email address by verifying its format and structure.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">validatePhone()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input matches the standard format for phone numbers, ensuring it contains the correct number of digits and accepted symbols, if any.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">validatePassword()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function checks if a given input meets the specified criteria for strong passwords, such as minimum length, inclusion of uppercase and lowercase letters, numbers, and special symbols.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">handleValidation()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function returns an object that contains hasError and errorMessage.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param1</th>
    <td style="border: none;">boolean</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param2</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ hasError: boolean, errorMessage: string }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">isAlphabetOnly()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      Check if the input value contains only alphabetic characters.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">boolean</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">isNumberOnly()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      Check if the input value contains only numberic characters.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">boolean</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">trimAndGetStringLength()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function trims any leading and trailing white space from a string and then returns its length.
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">string</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">{ trimmedValue: string, valueLen: number }</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

<h3>CheckTypes</h3>

> <div style="font-size: 1.3rem;">checkBoolType()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function verifies if the provided input is not of boolean type, throw <i>TypeError</i>
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">* any</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">void</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

</br>

> <div style="font-size: 1.3rem;">checkStringType()</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Description</th>
    <td style="border: none;">
      This function verifies if the provided input is not of string type, throw <i>TypeError</i>
    </td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Param</th>
    <td style="border: none;">* any</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Return</th>
    <td style="border: none;">void</td>
  </tr>
  <tr>
    <th style="border: none; text-align: left;">Throws</th>
    <td style="border: none;">TypeError</td>
  </tr>
</table>

<h3>Contants</h3>

> <div style="font-size: 1.3rem;">VALID_MSG</div>

<table style="margin-left: 1rem;">
  <tr>
    <th style="border: none; text-align: left;">Name</th>
    <th style="border: none; text-align: left;">Description</th>
  </tr>
  <tr>
    <td style="border: none;">FIRSTNAME_LENGTH</td>
    <td style="border: none;">
      First name must be minimum <code>number</code> characters and maximum <code>number</code> characters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">LASTNAME_LENGTH</td>
    <td style="border: none;">
      Last name must be minimum <code>number</code> characters and maximum <code>number</code> characters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">CONSECUTIVE_SPACES</td>
    <td style="border: none;">
      Multiple consecutive spaces are not allowed.
    </td>
  </tr>
  <tr>
    <td style="border: none;">NAME_INVALID_SYMBOL</td>
    <td style="border: none;">
      Invalid characters detected. Only alphabets and the symbols ",", "-", and "\'" are allowed.
    </td>
  </tr>
  <tr>
    <td style="border: none;">EMAIL_LENGTH</td>
    <td style="border: none;">
      Email must be minimum <code>number</code> characters and maximum <code>number</code> characters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">EMAIL_FORMAT</td>
    <td style="border: none;">
      Invalid email format. (ex, text@gmail.com)
    </td>
  </tr>
  <tr>
    <td style="border: none;">USERNAME_LENGTH</td>
    <td style="border: none;">
      Username must be minimum <code>number</code> characters and maximum <code>number</code> characters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">USERNAME_SYMBOL</td>
    <td style="border: none;">
      Only allow dot, dash, underbar, and at sign.
    </td>
  </tr>
  <tr>
    <td style="border: none;">USERNAME_SPACE</td>
    <td style="border: none;">
      No space is allowed.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_LENGTH</td>
    <td style="border: none;">
      Password must be minimum <code>number</code> characters and maximum <code>number</code> characters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_UPPERCASE</td>
    <td style="border: none;">
      Password must be minimum 1 uppercase letter.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_LOWERCASE</td>
    <td style="border: none;">
      Password must be minimum 1 lowercase letter.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_NUMBER</td>
    <td style="border: none;">
      Password must be minimum 1 number.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_SYMBOL</td>
    <td style="border: none;">
      Password must be minimum 1 symbol.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_MISMATCH</td>
    <td style="border: none;">
      Password and confirmation password fields do not match.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PASSWORD_ORDER</td>
    <td style="border: none;">
      Please enter the password before confirmation password field.
    </td>
  </tr>
  <tr>
    <td style="border: none;">REQUIRED</td>
    <td style="border: none;">
      This information is required.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PHONE_NUMBER_LENGTH</td>
    <td style="border: none;">
      Please enter a <code>number</code>-digit number without the country code.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PHONE_NUMBER_ONLY_DIGITS</td>
    <td style="border: none;">
      Phone numbers should only contain digits, not letters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PHONE_COUNTRY_CODE_ONLY_LETTERS</td>
    <td style="border: none;">
      Phone country code should only contain letters, not digits.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PHONE_DIAL_CODE_ONLY_DIGITS</td>
    <td style="border: none;">
      Phone country dial code should only contain digits, not letters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">PHONE_EXTENSION_ONLY_DIGITS</td>
    <td style="border: none;">
      Phone extension numbers should only contain digits, not letters.
    </td>
  </tr>
  <tr>
    <td style="border: none;">SELECTOR_REQUIRED</td>
    <td style="border: none;">
      At least one option must be selected.
    </td>
  </tr>
</table>
