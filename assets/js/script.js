// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input




//password variable values

// Start fuction to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function
function generatePassword() {
  // Prompts user Input
  var pwLength = prompt(
    "How long would you like your password to be? Choose between 8 and 128 characters"
  );
  // Choose length of password b/w 8 & 128. First if statement.
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Error. Please enter a value between 8 and 128.");
    return;
    // Validates user input
    // Start user input prompts
  } 
  
//paste variables here
// Split is a string function that splits the string of characters instead of typing everything out in array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var collectionOfChar = [];
var confirmLowercase = "abcdefghiklmnopqrsttuvwxtz".split("");
var confirmUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var confirmNumber = "0123456789".split("");
var confirmCharacter = "*&^%$#@!?><{}".split("");
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
