// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var userOptions = {};

var howMany = function () {
  var numOfChar = Number(
    prompt("How many characters you want on your password?")
  );

  if (numOfChar >= 10 && numOfChar <= 64) {
    return numOfChar;
  } else {
    alert(
      "Your password need at least 10 characters but no more than 64. Please try again."
    );
    return howMany()
  }
};

//TODO: create a condition to the numbers of characters

function getPasswordOptions() {
  userOptions = {
    numOfChar: howMany(),
    lowCase: confirm("Do you want a lower case letters on your password?"),
    upCase: confirm("Do you want a upper case letters on your password?"),
    numCase: confirm("Do you want numeric characters on your password?"),
    specialCase: confirm("Do you want special characters on your password?"),
  };
}

//TODO: Code should validate for each input and at least one character type should be selected.

// Function for getting a random element from an array
function getRandom(arr) {
  // get random index of the array
  const i = Math.floor(Math.random() * arr.length);

  // get random item using random index
  const item = arr[i];

  return item;
}

console.log(getRandom(specialCharacters));
console.log(getRandom(numericCharacters));
console.log(getRandom(lowerCasedCharacters));
console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log(userOptions);
  return userOptions.numOfChar;
  // return getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
