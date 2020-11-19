//variable needed for special characters, numeric characters, upper and lower case (will all be in an array)
var special=["!","@"] //add all special characters. do this for all variables needed in notes above

//function needed for prompts, alerts and confirms for "how long password?". Call out an Object to store the password,and a function to put the password together. google pswd gen to help
// Assignment Code


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
