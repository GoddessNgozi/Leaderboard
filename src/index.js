import postScore from './modules/postscore.js';
import getScores from './modules/getscores.js';

document.querySelector('form').addEventListener('submit', postScore);

document.getElementById('refresh').addEventListener('click', getScores);