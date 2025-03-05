//Variables
//Initialize variables for hours, minutes, seconds, milliseconds all set to 0
let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
//Declare a variable to store the timer ID
let timer;
//Initialize a flag to check if the timer is running
let running = false;

//Start Timer function
function startTimer() {
    //Check if the timer is not already running
    if(!running){
        // Set the running flag to true
        running = true;
        //Start a repeating function every 10 milliseconds
        timer = setInterval(() => {
        //Increase milliseconds by 10    
        milliseconds += 10;
        //If milliseconds reach 1000, it meant 1 second has passed
        if(milliseconds === 1000) {
            //Reset milliseconds to 0
            milliseconds = 0;
            //Increase seconds by 1
            seconds++;
        }
        //If seconds reach 60, it means 1 minute has passed
        if(seconds === 60) {
            //reset seconds to 0
            seconds = 0;
            //Increase minutes by 1
            minutes++;
        }
        //If minutes reach 60, it means 1 hour has passed
        if(minutes === 60) {
            //reset minutes to 0
            minutes = 0;
            //increase hours by 1
            hours++;
        }
        //Update the duisplayed time on the screen
        updateDisplay();
      },10)  
    }
}

//Stop timer function
function stopTimer() {
    //Set the running flag to false, stopping the timer
    running = false;
    //Clear the timer, stopping the interval
    clearInterval(timer);
}

//Reset timer function
function resetTimer() {
    //Set the running flag to false
    running =false;
    //Clear the timer, stopping the interval
    clearInterval(timer);
    //Reset hours to 0
    hours = 0;
    //Reset minutes to 0
    minutes = 0;
    //reset seconds to 0
    seconds = 0;
    //Reset milliseconds to 0
    milliseconds = 0;
    //Update the displayed time to 00:00:00:00
    updateDisplay();
}

//Update the time on screen function
function updateDisplay () {
    //Set the hours display with leading zero if needed (00 format)
    document.getElementById('hours').innerText = String(hours).padStart(2,"0"); //00 format
    //Set the minutes display with leading zero if needed (00 format)
    document.getElementById('minutes').innerText = String(minutes).padStart(2,"0");
    //Set the seconds display with leading zero if needed (00 format)
    document.getElementById('seconds').innerText = String(seconds).padStart(2,"0");
    // Sets the milliseconds display, dividing by 10 to get two digits (00 format)
    document.getElementById('milliseconds').innerText = String(Math.floor(milliseconds /10)).padStart(2,"0");
}

//Selecting the buttons
//Get the 'start' button element
const start = document.getElementById('start');
//Get the 'stop' button element
const stop = document.getElementById('stop');
//Get the 'reset' button element
const reset = document.getElementById('reset');

//Binding functions to the buttons
//Bind the `startTimer` function to the click  event of the 'start' button
start.addEventListener('click',startTimer);
//Bind the `stopTimer` function to the click  event of the 'stop' button
stop.addEventListener('click',stopTimer);
//Bind the `resetTimer` function to the click  event of the 'reset' button
reset.addEventListener('click',resetTimer);

