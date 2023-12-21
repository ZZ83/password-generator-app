import { checkPasswordStrength } from "./password.js";

const password = document.getElementById("password");
const copyPasswordIcon = document.getElementById("copyPasswordIcon");
const toastMessage = document.getElementById("toastMessage");

const charaterLength = document.getElementById("charaterLength");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numberCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");

const generateButton = document.getElementById("generateButton");

const charaterLengthSlider = document.getElementById("charaterLengthSlider");
const sliderFill = document.getElementById("fill");

copyPasswordIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
});

charaterLengthSlider.addEventListener("input", function () {
    const width = `${parseInt(this.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = this.value;
});

generateButton.addEventListener("click", function () {
    if (charaterLengthSlider.value !== "0") {
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
