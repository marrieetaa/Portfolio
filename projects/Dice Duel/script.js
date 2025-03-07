//Random Number Function
const randomNumber = () => Math.floor(Math.random() * 6 ) + 1;

//Roll Dice function
const rollDice = () => {
let randomNum1 = randomNumber();
let randomNum2 = randomNumber(); 
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
image1.src = 'dicePictures/dice' + randomNum1 + '.png';
image2.src = 'dicePictures/dice' + randomNum2 + '.png';
}

//
const diceButton = document.getElementById('dice-button');
diceButton.addEventListener('click',rollDice);

