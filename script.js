const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quotebutton');
const errContainer = document.querySelector('.main');

quoteBtn.addEventListener('click', generateQuote);

generateQuote();

const renderError = function (msg) {
  errContainer.insertAdjacentText('beforebegin', msg);
};

function generateQuote() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://seinfeld-quotes.herokuapp.com/random', config)
    .then((res) => res.json())
    .then((data) => {
      quoteEl.innerHTML = data.quote;
    })
    .catch((err) => {
      console.error(`${err} 💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    });
}

// data.author
