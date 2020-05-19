let displaySecond = 0;
let workMinutes = 25;
let brakeMinutes = 5;


function convertToString(number){
    let dString = '';
    dString = number.toString();
    if (number < 10){
        dString = '0' + dString;
    }
    return dString;
}


function formatTime(second){
    const minutes = Math.floor(second / 60);
    const seconds = second % 60;
    let displayString = '';
    

    const display = document.querySelector(".display");

    displayString = convertToString(minutes); //this formats the output time for the clock
    displayString = displayString + ' : ' + convertToString(seconds); 

    display.textContent = displayString;
    
}

function updateTime(){
    displaySecond--;
    if (displaySecond == 0) {
         displaySecond = setClock(workMinutes);
    }
    formatTime(displaySecond);
}

function setClock(minutes) {
    const second = 60 * minutes;
    return second;
}

displaySecond =  setClock(workMinutes);
formatTime(displaySecond);
setInterval(updateTime, 1);
