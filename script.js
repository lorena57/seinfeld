const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quotebutton');
const errContainer = document.querySelector('.main');

function checkButtonEqualQuote(author) {
  // console.log(author);
  let buttons = document.querySelectorAll('.btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      //Trying to tie in button character to quote
      // debugger;
      let btnName = e.target.value;

      let answer = displayMessage(btnName === author ? 'Correct' : 'Wrong');

      // let answer = btnName === author ? alert('ok') : alert('wrong answer');
      // if (btnName === author) {
      //   alert('ok');
      // } else {
      //   alert('wrong answer');
      // }

      // let clearOut = document.querySelectorAll('btn');
      // clearOut.reset();
    });
  });
}

quoteBtn.addEventListener('click', generateQuote);

const api_url = 'https://seinfeld-quotes.herokuapp.com/random';

async function generateQuote() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { quote, author } = data;
  console.log(data);
  console.log(quote);
  console.log(author);
  quoteEl.innerHTML = quote;
  checkButtonEqualQuote(author);
}

const renderError = function (msg) {
  errContainer.insertAdjacentText('beforebegin', msg);
};

generateQuote().catch((err) => {
  console.error(`${err} 💥💥`);
  renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
});

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// .catch((err) => {
//   renderError(`Something went wrong ${err.message}. Try again!`);
// });

// Old code
// function generateQuote() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://seinfeld-quotes.herokuapp.com/random', config)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       // quoteEl.innerHTML = data.quote;
//     })
//     .catch((err) => {
//       console.error(`${err} 💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     });
// }
