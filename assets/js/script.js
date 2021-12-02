// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Start fuction to write password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function
function generatePassword() {
  // Prompts user Input
  var pwLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");
  // Parses integers in user input for pw length
  var lengthConfirm = parseInt(pwLength);
  console.log(lengthConfirm);

  // Choose length of password b/w 8 & 128. First if statement.
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Error. Please enter a value between 8 and 128.");
    return;
    // Validates user input
    // Start user input prompts
  } 
  
// Split is a string function that splits the string of characters instead of typing everything out in array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var collectionOfChar = [];
var lowerCase = "abcdefghiklmnopqrsttuvwxtz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numberInt = "0123456789".split("");
var specialChar = "*&^%$#@!?><{}".split("");

// This is a confirm asking user if they want lowercase
var lowerCaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  if(lowerCaseConfirm === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      collectionOfChar.push(lowerCase[i]);
    }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}