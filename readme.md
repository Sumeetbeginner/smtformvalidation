
# Form Validation Library

A lightweight JavaScript library for validating form inputs such as names, usernames, passwords, and emails.

## Installation

Install the library using npm:

```bash
npm install smt-form-validation
```

## Usage

Import the validation functions and use them to validate form inputs. Each function returns an object with a `valid` boolean and an `error` message if the validation fails.

```javascript
const { validateName, validateUsername, validatePassword, validateEmail } = require('smt-form-validation');

// Validate Name
const nameResult = validateName('John Doe');
if (!nameResult.valid) {
  console.log(nameResult.error);
}

// Validate Username
const usernameResult = validateUsername('username_123');
if (!usernameResult.valid) {
  console.log(usernameResult.error);
}

// Validate Password
const passwordResult = validatePassword('Password1!');
if (!passwordResult.valid) {
  console.log(passwordResult.error);
}

// Validate Email
const emailResult = validateEmail('email@example.com');
if (!emailResult.valid) {
  console.log(emailResult.error);
}
```

## Validation Functions

### `validateName(name)`
- **Description:** Validates that the name is not empty and contains only alphabetic characters and spaces.
- **Parameters:** `name` (string)
- **Returns:** `{ valid: boolean, error: string }`

### `validateUsername(username)`
- **Description:** Validates that the username is not empty, has 3-20 characters, and contains only alphanumeric characters and underscores.
- **Parameters:** `username` (string)
- **Returns:** `{ valid: boolean, error: string }`

### `validatePassword(password)`
- **Description:** Validates that the password is not empty, at least 8 characters long, and contains uppercase, lowercase, digit, and special character.
- **Parameters:** `password` (string)
- **Returns:** `{ valid: boolean, error: string }`

### `validateEmail(email)`
- **Description:** Validates that the email is not empty and is in a valid email format.
- **Parameters:** `email` (string)
- **Returns:** `{ valid: boolean, error: string }`

## License

MIT
```

This version is more concise and still provides essential information for users to get started with your library.
```

Author - Sumeet Gupta