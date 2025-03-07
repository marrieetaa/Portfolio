//Random Number Function
const randomNumber = () => Math.floor(Math.random() * 6 ) + 1;

//Roll Dice function
const rollDice = () => {
let randomNum1 = randomNumber();
let randomNum2 = randomNumber(); 
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
image1.src = `dicePictures/dice${randomNum1}.png`;
image2.src = `dicePictures/dice${randomNum2}.png`;
image1.alt = `Dice showing ${randomNum1}`;
image2.alt = `Dice showing ${randomNum2}`;

//Display the result on the screen
const resultText = document.getElementById('result-text');
const result = () => {
   if(randomNum1 > randomNum2) {
     return resultText.innerText = 'Player one won';
   }else if (randomNum2 > randomNum1) {
    return resultText.innerText = 'Player two won'
   }else{
    return resultText.innerText = 'Tie';
   }
}
result()
}

//
const diceButton = document.getElementById('dice-button');
diceButton.addEventListener('click',rollDice);



