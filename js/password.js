const bars = document.getElementById("passwordBars").querySelectorAll("div");
const strengthText = document.getElementById("strengthText");

function resetBars() {
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
    bars.forEach((bar) => {
        bar.classList.remove(...classes);
        bar.classList.add("border-white");
    });
}

function setBarColors(index, color) {
    for (let i = 0; i <= index; i++) {
        bars[i].classList.remove("border-white");
        bars[i].classList.add(`bg-${color}`, `border-${color}`);
    }
}

export function checkPasswordStrength(password) {
    resetBars();
    if (password.length >= 11) {
        setBarColors(3, "green");
        strengthText.innerText = "Strong";
    } else if (password.length >= 9) {
        setBarColors(2, "yellow");
        strengthText.innerText = "Medium";
    } else if (password.length >= 6) {
        setBarColors(1, "orange");
        strengthText.innerText = "Weak";
    } else {
        setBarColors(0, "red");
        strengthText.innerText = "too Weak!";
    }
}
