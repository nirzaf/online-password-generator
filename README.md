# Free Online Password Generator

## Overview

This project is a free online password generator that allows users to create secure passwords. All processing is done locally on the user's device to ensure maximum security.

## Usage Instructions

1. Open the `index.html` file in your web browser.
2. Select the desired password options (special characters, numbers, uppercase, lowercase).
3. Set the desired password length.
4. Click the "Generate Password" button to create a new password.
5. Use the "Copy to Clipboard" button to copy the generated password.
6. Optionally, generate a backup version of the password.

## Functionality of `functions.js`

The `functions.js` file contains the following functions:

- `generatePassword()`: Generates a password based on user-selected options and updates the UI.
- `copyToClipboard()`: Copies the generated password to the clipboard.
- `generateBackupVersion()`: Generates a backup version of the password and copies it to the clipboard.
- `copyBackupVersionToClipboard()`: Copies the backup version of the password to the clipboard.
- `generateRandomString()`: Generates a random string based on the selected options.
- `viewPassword()`: Toggles the visibility of the generated password.

## Functionality of `index.html`

The `index.html` file contains the HTML structure for the password generator, including:

- Input fields for password options (special characters, numbers, uppercase, lowercase).
- An input field for setting the password length.
- A button for generating the password.
- A button for copying the password to the clipboard.
- A button for viewing the password.
- A section for generating and copying a backup version of the password.
