const getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267bbc3/scores/');
    const data = await response.json();
    const { result } = data;
    const board = document.getElementById('board');
    board.innerHTML = '';
    result.forEach((item) => {
        board.innerHTML += `
        <tr><td>${item.user}: ${item.score}</td></tr>
        `;
    })
};

export default getScores;