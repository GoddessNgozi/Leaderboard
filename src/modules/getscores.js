const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a3bnNfVu6IZEqV9J1Num/scores/');
  const data = await response.json();
  const { result } = data;
  const board = document.getElementById('board');
  board.innerHTML = '';
  result.forEach((item) => {
    board.innerHTML += `
        <tr><td>${item.user}: ${item.score}</td></tr>
        `;
  });
};

export default getScores;