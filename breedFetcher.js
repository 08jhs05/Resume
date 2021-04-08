const request = require('request');

const catQuery = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + catQuery;

request(url, (error, response, body) => {
  if (error) throw new Error('Request failed!!!');
  const data = JSON.parse(body);
  if (data[0] && data[0].description) console.log(data[0].description);
  else console.log(`Breed '${catQuery}' not found!`);
});
