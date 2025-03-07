//Quotes array- Store multiple quotes in an array
const quotes = [
    'Believe you can and you\'re halfway there.',
    'Character is power.',
    'Never be limited by other people\'s limited imaginations.',
    'Life is what happens when you\'re busy making other plans.',
    'In the end, we will remember not the words of our enemies, but the silence of our friends.',
    'We cannot solve problems with the kind of thinking we employed when we came up with them.\n -Albert Einstein'
  ]
  
  //Random Quote Generator Function
  function generateRandomQuote() {
    // Get the total number pf quotes in the array
      const quotesArrLength = quotes.length;
    // Generate a raandom index based on the array length
      const randomIndex = Math.floor(Math.random() * quotesArrLength);
    // Selecet a random quote from the array
      const randomQuote = quotes[randomIndex];
    // Get the quote display element
      const quote = document.getElementById('quote-text');
    // Update the text content of the quote display element
      quote.textContent = randomQuote;
  }
  
  //Get the 'New Quote' button element   
  const button  = document.getElementById('new-quote-btn');
  //Add a click event listener to the button, calling `generateRandomQuote` when clicked 
  button.addEventListener('click',generateRandomQuote);