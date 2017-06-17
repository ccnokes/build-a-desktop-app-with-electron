const counter = require('./counter');

const countEl = document.querySelector('#count');
const countBtn = document.querySelector('#countBtn');
const pidEl = document.querySelector('#pid');

pidEl.textContent = process.pid;

counter.onIncremented(({count}) => {
  countEl.textContent = count;
});

countBtn.addEventListener('click', () => {
  counter.increment();
});
