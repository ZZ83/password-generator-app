const password = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");

const sliderFill = document.getElementById("fill");
const charaterLength = document.getElementById("charaterLength");
const charaterLengthSlider = document.getElementById("charaterLengthSlider");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numberCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");

const generateButton = document.getElementById("generateButton");

function slider(range) {
    const width = `${parseInt(range.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = range.value;
}

copyIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
});

generateButton.addEventListener("click", function () {
    let regularX = "";
    let passwordText = "";
    let possibleCharacters = "";
    let passwordLength = charaterLength.innerText;

    if (uppercaseCheckbox.checked) {
        possibleCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        regularX += "(?=.*[A-Z])";
    }
    if (lowercaseCheckbox.checked) {
        possibleCharacters += "abcdefghijklmnopqrstuvwxyz";
        regularX += "(?=.*[a-z])";
    }
    if (numberCheckbox.checked) {
        possibleCharacters += "0123456789";
        regularX += "(?=.*[0-9])";
    }
    if (symbolsCheckbox.checked) {
        possibleCharacters += "!@#$%^&*";
        regularX += "(?=.*[!@#$%^&*])";
    }

    regularX = new RegExp(regularX);

    // Create a loop that will run until the password passes the regular expression test
    while (!regularX.test(passwordText)) {
        passwordText = "";
        for (let i = 0; i < passwordLength; i++) {
            let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
            passwordText += possibleCharacters[randomIndex];
        }
    }

    password.innerText = passwordText;
});
