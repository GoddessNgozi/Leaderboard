import getScores from './modules/getScores.js';
import postScore from './modules/postScore.js';

document.getElementById('refresh').addEventListener('click', getScores);

document.querySelector('form').addEventListener('submit', postScore);