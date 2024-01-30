import { checkPasswordStrength } from "./password.js";
import "./copyPassword.js";

const charaterLength = document.getElementById("charaterLength");

const charaterLengthSlider = document.getElementById("charaterLengthSlider");
charaterLengthSlider.addEventListener("input", function () {
    const sliderFill = document.getElementById("fill");
    const width = `${parseInt(this.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = this.value;
});

const generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function () {
    const password = document.getElementById("password");
    const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
    const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
    const numberCheckbox = document.getElementById("numbersCheckbox");
    const symbolsCheckbox = document.getElementById("symbolsCheckbox");
    if (charaterLength.innerText !== "0") {
        if (
            uppercaseCheckbox.checked ||
            lowercaseCheckbox.checked ||
            numberCheckbox.checked ||
            symbolsCheckbox.checked
        ) {
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
        } else {
            alert("Please select at least one option");
        }
    }
});
