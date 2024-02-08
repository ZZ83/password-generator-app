const strengthMeterBars = document.getElementById("strengthMeterBars").querySelectorAll("div");

function resetStrengthMeterBars() {
    const classes = [
        "bg-yellow",
        "bg-orange",
        "bg-green",
        "bg-red",
        "border-yellow",
        "border-orange",
        "border-green",
        "border-red",
    ];
    strengthMeterBars.forEach((bar) => {
        bar.classList.remove(...classes);
        bar.classList.add("border-white");
    });
}

function setBarColors(index, color) {
    for (let i = 0; i <= index; i++) {
        strengthMeterBars[i].classList.remove("border-white");
        strengthMeterBars[i].classList.add(`bg-${color}`, `border-${color}`);
    }
}

export function checkPasswordStrength(password) {
    let strength = 0;
    const strengthText = document.getElementById("strengthText");
    resetStrengthMeterBars();

    if (password.length > 8) {
        strength += 1;
    }
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/\d/)) {
        strength += 1;
    }
    if (password.match(/[^a-zA-Z\d]/)) {
        strength += 1;
    }

    if (strength < 2) {
        setBarColors(0, "red");
        strengthText.innerText = "too Weak!";
    } else if (strength === 2) {
        setBarColors(1, "orange");
        strengthText.innerText = "Weak";
    } else if (strength === 3) {
        setBarColors(2, "yellow");
        strengthText.innerText = "Medium";
    } else {
        setBarColors(3, "green");
        strengthText.innerText = "Strong";
    }
}
