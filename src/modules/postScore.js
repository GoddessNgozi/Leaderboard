const postScore = async (data) => {
    const post = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/24c0c3c116974ac49488d4eb0267bbc3/scores/', post);
  };

  export default postScore;