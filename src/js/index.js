async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://api.trello.com/1/cards/5fe8799b252fd55fce992609/customField/5fe82871a57f03405cd275bb/item?key=8e76660f23f5b1e0cd81c25aeae5d4a0&token=6740a5f86659b0e5ff2191fb5150351f4e1bfc43b65674542f9d9e8c4f5de830', { value: {'text': 'email@bubble.com'} })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });