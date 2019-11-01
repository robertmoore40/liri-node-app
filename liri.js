require("dotenv").config();

// 8. Add the code required to import the `keys.js` file and store it in a variable.

var keys = require("./keys.js");
  
// * You should then be able to access your keys information like so

var spotify = new Spotify(keys.spotify);

// 9. Make it so liri.js can take in one of the following commands:
//    * `concert-this`
//    * `spotify-this-song`
//    * `movie-this`
//    * `do-what-it-says`

var liriInput = process.argv[2];
switch (liriInput) {
    case "concert-this":
        concertThis()
    break;
    case "spotify-this-song":
        spotifyThisSong()
    break;
    case "movie-this":
        movieThis()
    break;
    case "do-what-it-says":
        doWhatItSays()
    break;
}

function concertThis() {}
function spotifyThisSong() {}
function movieThis() {}
function doWhatItSays() {}