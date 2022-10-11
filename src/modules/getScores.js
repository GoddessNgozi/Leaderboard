const getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267bbc3/scores/');
    const data = await response.json();
    const { result } = data;
    const container = document.getElementById('container');
    container.innerHTML = '';
    result.forEach((item) => {
        container.innerHTML += `
        <li>${item.user}: ${item.score}</li>
        `;
    })
};

export default getScores;