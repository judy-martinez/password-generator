// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Input variables:
var pwLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;

//password variable values
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  // User Input
  var pwLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");

  // First if statement
  if (pwLength < 8 || pwLength > 128 ) {
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
generateBtn.addEventListener("click", function () {
  ps = writePassword();
  document.getElementsByClassName("password").placeholder = ps;
});
