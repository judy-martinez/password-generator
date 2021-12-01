// Assignment code here

//Input variables:
var pwLength;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;

//Password variable values
//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // User Input
  pwLength = prompt("How long would you like your password to be? Choose between 8 and 128 characters");
  // If statement
  if (!pwLength) {
    alert("You must type in a value. How many characters would you like in your password?");
  } else if (pwLength <8 || pwLength > 128) {
      // Validates user input
      // Start user input prompts
      pwLength = parseInt(prompt("You must choose between 8 and 128 characters"));

  } else {
      //Goes on when user input is validated
      confirmLowercase = confirm("Would you like to include lowercase characters?");
      confirmUppercase = confirm("Would you like to include uppercase characters?");
      confirmNumber = confirm("Would you like to include numbers?");
      confirmCharacter = confirm("Would you like to include special characters?");
  };

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
