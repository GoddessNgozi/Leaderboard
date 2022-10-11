import getScores from './modules/getScores.js';
import postScore from './modules/postScore.js';

document.getElementById('refresh').addEventListener('click', getScores);

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const data = {
    user: name.trim(),
    score: score,
  };
  postScore(data);
  form.reset();
});