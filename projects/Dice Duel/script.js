let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1; 

const image1 = document.getElementById('image1');
image1.src = 'dicePictures/dice' + randomNum1 + '.png';
const image2 = document.getElementById('image2');
image2.src = 'dicePictures/dice' + randomNum2 + '.png';



