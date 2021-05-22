const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quotebutton');
const errContainer = document.querySelector('.main');

quoteBtn.addEventListener('click', generateQuote);

const api_url = 'https://seinfeld-quotes.herokuapp.com/random';

async function generateQuote() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { quote, author } = data;
  console.log(quote);
  console.log(author);
  quoteEl.innerHTML = quote;
}

const renderError = function (msg) {
  errContainer.insertAdjacentText('beforebegin', msg);
};

generateQuote().catch((err) => {
  renderError(`Something went wrong ${err.message}. Try again!`);
});

//Old code
// function generateQuote() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://seinfeld-quotes.herokuapp.com/random', config)
//     .then((res) => res.json())
//     .then((data) => {
//       // quoteEl.innerHTML = data.quote;

//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     });
// }
