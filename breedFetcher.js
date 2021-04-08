const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, response, body) => {
    if (error) throw new Error('Request failed!!!');
    const data = JSON.parse(body);
    let desc = '';
    if (data[0] && data[0].description) desc = data[0].description;
    else desc = `Breed '${breedName}' not found!`;
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };