const request = require('request');
// const myArgs = process.argv.slice(2);
// //const url = myArgs[0];
// const breed = myArgs[1];
const fetchBreedDescription = (breed, callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (!error) {
      const data = JSON.parse(body);
      console.log(typeof data);
      if (data.length === 0) {
        return callback("Breed not found with error", null);
      } else {
        return callback(`Description of ${breed} : ${data[0].description}`, null);
      }
    }

    return callback(error, null);

  });
};
module.exports = { fetchBreedDescription };