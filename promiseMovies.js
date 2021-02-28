const axios = require('axios');
const fs = require('fs').promises;

axios.get('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log('Sucessfully retrieved our list of movies');
        let movieList = '';
        response.data.forEach(movie => {
            movieList += `${movie['title']}, ${movie['release_date']}\n`;
        });
        return fs.writeFile('promiseMovies.csv', movieList);
    })
    .then(() => {
        console.log('Save our list of movies to promisMovies.csv')
    })
    .catch((error) => {
        console.error(`Could not save the Ghibli movies to a file: ${error}`);
    })      
