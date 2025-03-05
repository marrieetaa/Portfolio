//Variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

//Start Timer
function startTimer() {

    if(!running){
        running = true;

        timer = setInterval(() => {
        milliseconds += 10;

        if(milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if(seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if(minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
      },10)  
    }
}

//Stop timer
function stopTimer() {
    running = false;
    clearInterval(timer);
}

//Reset timer
function resetTimer() {
    running =false;
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

//Update the time on screen
function updateDisplay () {
    document.getElementById('hours').innerText = String(hours).padStart(2,"0"); //00 format
    document.getElementById('minutes').innerText = String(minutes).padStart(2,"0");
    document.getElementById('seconds').innerText = String(seconds).padStart(2,"0");
    document.getElementById('milliseconds').innerText = String(Math.floor(milliseconds /10)).padStart(2,"0");
}

//Selecting the buttons
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

//Binding functions to the buttons
start.addEventListener('click',startTimer);
stop.addEventListener('click',stopTimer);
reset.addEventListener('click',resetTimer);


