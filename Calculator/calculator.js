const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const body = document.querySelector("body");

// On page load
const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
if (isDarkTheme) {
    calculator.classList.add('dark');
    body.classList.add('active');
    themeToggleBtn.classList.add('active');
}

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === "clear") {
            display.innerText = "";
        } else if (item.id === "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== "" && item.id === "equal") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error!";
                setTimeout(() => (display.innerText = ""), 1000);
            }
        } else if (display.innerText === "" && item.id === "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 1000);
        } else {
            display.innerText += item.id;
        }
    };
});

themeToggleBtn.onclick = () => {
    const isDark = calculator.classList.toggle("dark");
    body.classList.toggle("active");
    themeToggleBtn.classList.toggle("active");
    localStorage.setItem('isDarkTheme', isDark);
};
