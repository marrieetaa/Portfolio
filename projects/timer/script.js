//Variables
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

//Timer start function
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

//Stop function
function stopTimer() {
    running = false;
    clearInterval(timer);
}

//update
function updateDisplay () {
    document.getElementById('hours').innerText = String(hours).padStart(2,"0"); //00 format
    document.getElementById('minutes').innerText = String(minutes).padStart(2,"0");
    document.getElementById('seconds').innerText = String(seconds).padStart(2,"0");
    document.getElementById('milliseconds').innerText = String(Math.floor(milliseconds /10)).padStart(2,"0");
}

//
const start = document.getElementById('start');
start.addEventListener('click',startTimer);

const stop = document.getElementById('stop');
stop.addEventListener('click',stopTimer);


