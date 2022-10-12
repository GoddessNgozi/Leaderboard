const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', { name: 'FunLoop' })
  .then((data) => {
    console.log(data);
  });