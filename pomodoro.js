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

//count sessions and give back the right number of minutes for brake and work
function switchToNextSession(){
    let second = 0;
    
    isBrakeSession = !isBrakeSession;
    if(count ==3 && isBrakeSession){
         second = setClock(LONG_BRAKE);
         count = 1;
         return second;
    } 
    else {
        if (isBrakeSession) {
            count = count + 1;
            second = setClock(brakeMinutes);
        } else {
            second = setClock(workMinutes);
        }
        return second;
    }   
}

function updateTime(){
    displaySecond--;
    if (displaySecond == 0) {
         displaySecond = switchToNextSession(); //count sessions and give back the right number of 
                                                //minutes for brake and work
    }
    formatTime(displaySecond);
}

function setClock(minutes) {
    const second = 60 * minutes;
    return second;
}
 

function btnStartPress(){
    console.log("start");
    if (!timer) {
        timer = setInterval(updateTime, 1);
    } 
}

function btnStopPress(){
    console.log("stop");
    clearInterval(timer);
    timer = undefined;
}

function btnResetPress(){
    console.log("reset");
    displaySecond =  setClock(workMinutes);
    formatTime(displaySecond);
}

function onBtnControlPress(e){
    const id = e.target.id;
    switch(id){
        case "start":
            btnStartPress();
            break;
        case "stop":
            btnStopPress();
            break;
        case "reset":
            btnResetPress()
            break;
    }
}

function onBtnSetPress(e){
    console.log('set button');
}

function onClick (e){
    if (e.target.className == "button control"){
    onBtnControlPress(e)
    } 
    else{
    onBtnSetPress(e)
    }   
}

//main program
let displaySecond = 0;
let workMinutes = 25;
let brakeMinutes = 5;
let count = 1;
let isBrakeSession = false;
const LONG_BRAKE = 30;
let timer;

btnResetPress();

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', onClick));