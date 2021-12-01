// Assignment code here

//Input variables:
var enter;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // User Input
  enter = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128 characters"));
  // If statement
  if (!enter) {
      alert("How many characters long would you like your password to be?");
  } else if (enter <8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseint(prompt("You must choose between 8 and 128"));
  };

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function (){
  ps = writePassword();
  document.getElementsByClassName("password").placeholder = ps;
});
