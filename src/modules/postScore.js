const postScore = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const data = {
    user: name.trim(),
    score,
  };
  const post = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267bbc3/scores/', post);
  document.querySelector('form').reset();
};

export default postScore;