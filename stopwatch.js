// DOM ELEMENTS


const changeFormat = document.querySelector("#changeFormat");
const timeText = document.querySelector(".time");


// GLOBAL VARIABLES

let running = false;
let number = 0;


// DARK MODE


document.querySelector("#nightMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
})


// SEETING DATE

clockSettings = {hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit"}
is12Hour = false

changeFormat.addEventListener("click", () => {

    if(is12Hour){
         changeFormat.textContent = "12 HOUR FORMAT";
         clockSettings.hour12 = false;
         is12Hour = false;
    }

    else if(!is12Hour){
        changeFormat.textContent = "24 HOUR FORMAT";
        clockSettings.hour12 = true;
        is12Hour = true;
    }

})

setInterval(() =>{

    let currentDate = new Date();
    timeText.textContent = currentDate.toLocaleTimeString(undefined, clockSettings);

}, 1)