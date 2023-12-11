import "./slider.js";
import { checkPasswordStrength } from "./password.js";

const password = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");

const charaterLength = document.getElementById("charaterLength");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numberCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");

const generateButton = document.getElementById("generateButton");

copyIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
});

generateButton.addEventListener("click", function () {
    if (charaterLengthSlider.value !== "0") {
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

        if (parseInt(charaterLength.innerText) >= 4) {
            while (!regularX.test(passwordText)) {
                passwordText = "";
                for (let i = 0; i < passwordLength; i++) {
                    let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                    passwordText += possibleCharacters[randomIndex];
                }
            }
        } else {
            for (let i = 0; i < passwordLength; i++) {
                let randomIndex = Math.floor(Math.random() * possibleCharacters.length);
                passwordText += possibleCharacters[randomIndex];
            }
        }
        password.innerText = passwordText;
        checkPasswordStrength(passwordText);
    }
});
