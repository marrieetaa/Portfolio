//Random Number Function
const randomNumber = () => Math.floor(Math.random() * 6 ) + 1;

//Roll Dice function
const rollDice = () => {
  let randomNum1 = randomNumber();
  let randomNum2 = randomNumber(); 
  const dice1 = document.getElementById('image1');
  const dice2 = document.getElementById('image2');
//
dice1.classList.add('rolling');
dice2.classList.add('rolling');
//
setTimeout(() => {
  dice1.src = `dicePictures/dice${randomNum1}.png`;
  dice2.src = `dicePictures/dice${randomNum2}.png`;
  dice1.alt = `Dice showing ${randomNum1}`;
  dice2.alt = `Dice showing ${randomNum2}`;

//
dice1.classList.remove('rolling');
dice2.classList.remove('rolling'); 

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
 },500)
}

//
const diceButton = document.getElementById('dice-button');
diceButton.addEventListener('click',rollDice);



