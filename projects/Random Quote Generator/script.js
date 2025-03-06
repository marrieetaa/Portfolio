//Quotes array
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
    const quotesArrLength = quotes.length;
    const randomIndex = Math.floor(Math.random() * quotesArrLength);
    const randomQuote = quotes[randomIndex];
    const quote = document.getElementById('quote-text');
    quote.textContent = randomQuote;
}

