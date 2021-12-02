// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var collectionOfChar = [];
var pwLength; 
var confirmLowercase; "abcdefghiklmnopqrsttuvwxtz" .split("");
var confirmUppercase; "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var confirmNumber; "0123456789" .split ("");
var confirmCharacter; "*&^%$#@!?><{}" .split("");

//password variable values

// Start fuction to write password
function writePassword() {
  // Prompts user Input
  var pwLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");
  // Choose length of password b/w 8 & 128. First if statement. 
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
      alert ("Error. Please enter a value between 8 and 128.");
      return;
      // Validates user input
      // Start user input prompts

  } else {
    //Goes on when user input is validated
    confirmLowercase = confirm("Would you like to include lowercase characters?");
    confirmUppercase = confirm("Would you like to include uppercase characters?");
    confirmNumber = confirm("Would you like to include numbers?");
    confirmCharacter = confirm("Would you like to include special characters?");
  };

  // Else If for invalid options
  if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmCharacter) {
      options = alert("Sorry, you must choose criteria for a password to be generated");
      return;    
  }

  // password variable is an array placeholder for user generated amount of length
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);