var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '?', '-', '{', '}', '[', ']', '~', '.', '_', '/', '\\'];

var numericCharacters = ['0', "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperCasedCharacters= ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCasedCharachters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function getPasswordOptions() {
    var length = parseInt(prompt('How many characters would you like your password to contain?'));


    if (isNaN(length) === true) {
        alert('Password length must be provided as a number');
        return;
    }

    if (length < 8) {
        alert('Password length must be at least 8 charaters');
        return;
    }

    if (length > 128) {
        alert('Password length must be less than 129 characters');
        return;
    }

    var hasSpecialCharacters = confirm('Click OK to confirm including special characters.');

    var hasNumericCharacters = confirm('Click OK to confirm including special characters.');

    var hasLowerCasedCharacters = confirm ('Click OK to confirm including lowercase characters.');

    var hasUpperCasedCharacters = confirm('Click OK to confirm including uppercase characters.');

    if (length > 128) {
        alert('Password length must be less than 129 characters');
        return;
    }

    if ( 
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUppercasedCharacters === false
    ) {
    alert('Must select at least one character type');
    return;
    }

    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters
    };

    return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;  
}

function generatePassword() {
    var options = getPasswordOptions();
    var result = [];

    var possibleCharacters = [];

    var guaranteedCharacters = [];

    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    }

    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(numericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    }

    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(lowerCasedCharachters);
        guaranteedCharacters.push(getRandom(lowerCasedCharachters));
    }

    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters.push(getRandom(upperCasedCharacters));
    }

    for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
    }

    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    }
    return result.join('');

}

var generateBtn = document.querySelector('#generate');

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);