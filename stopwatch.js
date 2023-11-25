// DOM ELEMENTS
const changeFormat = document.querySelector("#changeFormat");
const timeText = document.querySelector(".time");
const nightModeButton = document.querySelector("#nightMode");

// -----

const userMode = localStorage.getItem('theme');
const userFormat = localStorage.getItem('format');

if (userMode) {
    document.body.classList.add(userMode);
}
let is12Hour = userFormat === 'true';

changeFormat.textContent = is12Hour ? "12 HOUR FORMAT" : "24 HOUR FORMAT";

const clockSettings = { hour12: is12Hour, hour: "2-digit", minute: "2-digit", second: "2-digit" };

// DARK MODE
nightModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    
    const isDarkMode = document.body.classList.contains("dark");
    localStorage.setItem('theme', isDarkMode ? 'dark' : '');
});

// SETTING DATE
changeFormat.addEventListener("click", () => {

    is12Hour = !is12Hour;

    localStorage.setItem('format', is12Hour);

    changeFormat.textContent = is12Hour ? "12 HOUR FORMAT" : "24 HOUR FORMAT";

    clockSettings.hour12 = is12Hour;
});

setInterval(() => {
    let currentDate = new Date();
    timeText.textContent = currentDate.toLocaleTimeString(undefined, clockSettings);
}, 1);
