let capitalAlphabets = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
let smallAlphabets = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
let numbers = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

let password = prompt("Enter your password:");

let containAlphabet = false;
let containNumber = false;

for (let i = 0; i < password.length; i++) {
  let code = password.charCodeAt(i);

  if (capitalAlphabets.includes(code) || smallAlphabets.includes(code)) {
    containAlphabet = true;
  }

  if (numbers.includes(code)) {
    containNumber = true;
  }
}

let firstCharNotNumber = !numbers.includes(password.charCodeAt(0));
let lengthValid = password.length >= 6;

let reasonInvalid = "";

if (!containAlphabet) {
  reasonInvalid += "Password must contain alphabets. ";
}

if (!containNumber) {
  reasonInvalid += "Password must contain numbers. ";
}

if (!firstCharNotNumber) {
  reasonInvalid += "Password cannot begin with a number. ";
}

if (!lengthValid) {
  reasonInvalid += "Password must be at least 6 characters long. ";
}

document.write(`Entered Password: ${password}<br/>`);

if (containAlphabet && containNumber && firstCharNotNumber && lengthValid) {
  document.write("Password is valid");
} else {
  document.write(reasonInvalid + " <br/>");
  document.write("Please enter a valid password");
}