// Grab the DOM elements
const resultDOM = document.getElementById('result');
const lengthDOM = document.getElementById('length');
const uppercaseDOM = document.getElementById('uppercase');
const numbersDOM = document.getElementById('numbers');
const symbolsDOM = document.getElementById('symbols');
const generatebtn = document.getElementById('generate');
const form = document.getElementById('passwordForm');

// Generate character codes by grabbing their ASCII numbers
// best practice: avoid using hardcoded magic numbers / strings that have no clear association
const ascii = {
  // Uppercase -- A - Z
  A: 65,
  Z: 90,
  // Lowercase -- a - z
  a: 97,
  z: 122,
  // Numbers -- 0 - 9
  zero: 48,
  nine: 57,
  // Symbols -- ! - /
  sym33: 33,
  sym47: 47,
  // Symbols -- : - @
  sym58: 58,
  sym64: 64,
  // Symbols -- [ - `
  sym91: 91,
  sym96: 96,
  // Symbols -- { - -
  sym123: 123,
  sym126: 126,
};

const UPPERCASE_CODES = rangeOfAsciiCodes(ascii.A, ascii.Z);
const LOWERCASE_CODES = rangeOfAsciiCodes(ascii.a, ascii.z);
const NUMBER_CODES = rangeOfAsciiCodes(ascii.zero, ascii.nine);
const SYMBOL_CODES = rangeOfAsciiCodes(ascii.sym33, ascii.sym47)
  .concat(rangeOfAsciiCodes(ascii.sym58, ascii.ascii64))
  .concat(rangeOfAsciiCodes(ascii.sym91, ascii.sym96))
  .concat(rangeOfAsciiCodes(ascii.sym123, ascii.sym126));

// Add the respective ASCII numbers to uppercase, lowercase, number and symbol arrays
function rangeOfAsciiCodes(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Randomly generate password
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  // Create a large array that contains all ASCII number options selected by user
  // By default, lowercase letters will be included in generated password
  let charCodes = LOWERCASE_CODES;
  // If user selects uppercase option, add uppercase letters to charCodes
  if (includeUppercase) {
    charCodes = charCodes.concat(UPPERCASE_CODES);
  }
  // If user selects symbols option, add symbols to charCodes
  if (includeSymbols) {
    charCodes = charCodes.concat(SYMBOL_CODES);
  }
  // If user selects numbers option, add numbers to charCodes
  if (includeNumbers) {
    charCodes = charCodes.concat(NUMBER_CODES);
  }

  // Create an empty array that will have randomly selected characters added to it
  const passwordCharacters = [];

  for (let i = 0; i < characterAmount; i++) {
    // Generate a random index position from the charCodes array
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    // We take the empty array and add the character (converted from the ASCII number)
    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  // returns the array of randomly password characters as a string
  return passwordCharacters.join('');
}

form.addEventListener('submit', submitForm);

function submitForm(event) {
  // Disables the default behavior of reloading the page when submitting a form using the function
  event.preventDefault();

  // Pull in the user's inputs and assign to variables
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;

  // Run generatePassword formula and return the results into password
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  // Replace the innerText of result with the new password
  resultDOM.innerText = password;
}
