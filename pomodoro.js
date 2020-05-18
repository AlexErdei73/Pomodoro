let displaySecond = 0;
let workMinutes = 25;
let brakeMinutes = 5;
let IsBrakeTime = false;
let counter = 1;


function convertToString(number){
    let dString = '';
    dString = number.toString();
    if (number < 10){
        dString = '0' + dString;
    }
    return dString;
}


function formatTime(time){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let displayString = '';
    

    const display = document.querySelector(".display");

    displayString = convertToString(minutes); //this formats the output time for the clock
    displayString = displayString + ' : ' + convertToString(seconds); 

    display.textContent = displayString;
    
}

function updateTime(){
    displaySecond--;
    if (displaySecond == 0) {//return displaySecond =0;
         IsBrakeTime = toggleWorkAndBrake(IsBrakeTime);
         tickCounter(counter);
    }
    formatTime(displaySecond);
}

function setClock(minutes) {
    return minutes * 60;
}

function toggleWorkAndBrake({isBrake: indicator,time: seconds}){
    if (!indicator) {
        displaySecond = setClock(workMinutes);
    } else {
        displaySecond = setClock(brakeMinutes);
    }
    return !indicator;
}

function tickCounter(number){
    number++;
}


displaySecond = 60 * workMinutes;
formatTime(displaySecond);
setInterval(updateTime, 1);
