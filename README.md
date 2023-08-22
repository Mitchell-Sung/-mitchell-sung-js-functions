# @sds-stream/function-validations

A comprehensive user input validation library for Node.js and the browser. Ensure your application receives the correct type of data every time.

## Features

- Easy-to-use API
- Built-in common validations
- Extendable for custom validations
- Lightweight with no external dependencies

## Installation

```bash
npm install @sds-stream/function-validations
```

## Basic Usage

### ES5 Syntax

```javascript
var { validateUsername } = require('@sds-stream/function-validations');

function func_name() {
  var inputUsername = 'mitchell@streamdata.com';

  var res = validateUsername(inputUsername);

  console.log('hasError :>> ', res.hasError); // true or false
  console.log('errorMessage :>> ', res.errorMessage); // "Error messages..."
}
```

### ES6 Syntax

```javascript
import { validateUsername } from '@sds-stream/function-validations';

const func_name = () => {
  const inputUsername = 'mitchell@streamdata.com';

  const res = validateUsername(inputUsername);

  console.log('hasError :>> ', res.hasError); // true or false
  console.log('errorMessage :>> ', res.errorMessage); // "Error messages..."
};
```

## API Documentation

### Validations

> <span style="font-size: 1.3rem;">validateFirstName()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validateFirstName()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided first name by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">validateLastName()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validateLastName()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided last name by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">validateUsername()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validateUsername()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided last username by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">validateEmail()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validateEmail()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided last email by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">validatePhone()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validatePhone()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided last phone by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">validatePassword()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">validatePassword()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided last password by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">handleValidation()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">handleValidation()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">Validates the provided condition and prepares an error message object.</td>
  </tr>
  <tr>
    <th style="border: none;">Param1</th>
    <td style="border: none;"><code>boolean</code></td>
  </tr>
  <tr>
    <th style="border: none;">Param2</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ hasError: boolean, errorMessage: string }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">isAlphabetOnly()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">isAlphabetOnly()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">Validates the provided condition and prepares an error message object.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>boolean</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">isNumberOnly()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">isNumberOnly()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">Validates the provided condition and prepares an error message object.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>boolean</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">trimAndGetStringLength()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">trimAndGetStringLength()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">Validates the provided condition and prepares an error message object.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>string</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>{ trimmedValue: string, valueLen: number }</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

### CheckTypes

> <span style="font-size: 1.3rem;">checkBoolType()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">checkBoolType()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided first name by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>* any</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>void</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>

</br>

> <span style="font-size: 1.3rem;">checkStringType()</span>

<table  style="margin-left: 1rem;">
  <tr>
    <th style="border: none;">Name</th>
    <td style="border: none;">checkStringType()</td>
  </tr>
  <tr>
    <th style="border: none;">Description</th>
    <td style="border: none;">This function validates the provided first name by checking.</td>
  </tr>
  <tr>
    <th style="border: none;">Param</th>
    <td style="border: none;"><code>* any</code></td>
  </tr>
  <tr>
    <th style="border: none;">Return</th>
    <td style="border: none;"><code>void</code></td>
  </tr>
  <tr>
    <th style="border: none;">Throws</th>
    <td style="border: none;"><code>TypeError</code></td>
  </tr>
</table>
