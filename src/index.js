const result = [
  {
    user: 'Ngozi',
    score: '100',
  },
  {
    user: 'Jenny',
    score: '500',
  },
];

const getScores = () => {
  const board = document.getElementById('board');
  board.innerHTML = '';
  result.forEach((item) => {
    board.innerHTML += `
          <tr><td>${item.user}: ${item.score}</td></tr>
          `;
  });
};

const postScore = (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const data = {
    user: name.trim(),
    score,
  };
  result.push(data);
  document.querySelector('form').reset();
};

document.getElementById('refresh').addEventListener('click', getScores);

document.querySelector('form').addEventListener('submit', postScore);