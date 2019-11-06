require("dotenv").config();
// require('dotenv').config({path: "dotenvfile.env"});
// console.log(process.env.NAME) //YOUR_NAME

// 8. Add the code required to import the `keys.js` file and store it in a variable.

var keys = require("./keys.js");
var request = require('request');
var inquirer = require('inquirer');
  
// * You should then be able to access your keys information like so

// Need to write in line where spotify is required PACKAGE NAME??
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);

var axiosPackage = require("axios");
var momentPackage = require("moment");


var fsPackage = require("fs"); 

// 9. Make it so liri.js can take in one of the following commands:
//    * `concert-this`
//    * `spotify-this-song`
//    * `movie-this` 
//    * `do-what-it-says`


// var userInput = process.argv[2];

var userInput="";

	for (var i = 3; i < process.argv.length; i++)
	{
		userInput+=process.argv[i];
	}
console.log(userInput);

// Technically this isn't an array - join function isn't working - need to convert multiple inputs into array
// Need to adjust this. Finished 11/6/19 13:35

// Inquirer prompt
inquirer.prompt({
    type: 'list',
    name: 'choice',
    message: 'Choose a function',
    choices: ["concertThis", "spotifyThis", "movieThis", "doWhatItSays"]
}).then(liri => {
    switch (true) {
        case liri.choice === "concertThis":
            concertThis(userInput);
            break;

        case liri.choice === "spotifyThis":
            spotifyThisSong(userInput);
            break;

        case liri.choice === "movieThis":
            movieThis(userInput);
            break;

        case liri.choice === "doWhatItSays":
            doWhatItSays(userInput);
            break;

        default:


// let searchTerm = [];
// for (let i = 3; i < process.argv.length; i++) {
//     searchTerm.push(process.argv[i]);
// }
// var userInput;
// if (searchTerm.length > 0) {
//     userInput = true;
// } else {
//     userInput = false;
// }

// var liriInput = process.argv[2];
// switch (liriInput) {
//     case "concert-this":
//         concertThis()
//     break;
//     case "spotify-this-song":
//         spotifyThisSong()
//     break;
//     case "movie-this":
//         movieThis()
//     break;
//     case "do-what-it-says":
//         doWhatItSays()
//     break;

//     default:
//         console.log("My responses are limited. You must ask the right questions.");
//     // write default to return a list of possible commands
// }
// // 
// // 

// switch (process.argv[2]) {
//     case "spotify-this-song":
//         if (userInput) {
//             searchTerm = searchTerm.join(" ");
//             return runSpotify(searchTerm);
//         } else {
//             // let sign = "The Sign"
//             // runSpotify(sign);
//             // Instead default;
//             // run alert saying need to add a search term
//             return alertUser();
//         }
//     case "movie-this":
//         if (process.argv.length > 3) {
//             searchTerm = searchTerm.join("+");
//             runOMDB(searchTerm);
//         } else {
//             let nobody = "Mr. Nobody"
//             runOMDB(nobody);
//         }
//         break;
//     case "concert-this":
//         if (process.argv.length > 3) {
//             search = search.join("+");
//             runBandsInTown(search);
//         } else {
//             let myBand = "Metallica"
//             runBandsInTown(myBand);
//         }
//         break;
//     case "do-what-it-says":
//         runRandom();
//         break;
//     default:
//         console.log("this is not working as expected, check spelling of your search method");


function concertThis() {
    console.log("concert-this");
    console.log(userInput);
}


// 1. `node liri.js concert-this <artist/band name here>`
//    * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
//      * Name of the venue
//      * Venue location
//      * Date of the Event (use moment to format this as "MM/DD/YYYY")
//     * **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:
//       * `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
function spotifyThisSong() {
    console.log("spotify-this-song");
    console.log(userInput);
}



// 2. `node liri.js spotify-this-song '<song name here>'`
//    * This will show the following information about the song in your terminal/bash window
//      * Artist(s)
//      * The song's name
//      * A preview link of the song from Spotify
//      * The album that the song is from
//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
//    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:
//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
//    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
function movieThis() {
    console.log("movie-this");
    console.log(userInput);
}

// 3. `node liri.js movie-this '<movie name here>'`
//    * This will output the following information to your terminal/bash window:
//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```
//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
//      * It's on Netflix!
//    * You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
function doWhatItSays() 
{console.log("do-what-it-say");
console.log(userInput);
}}});

// 4. `node liri.js do-what-it-says`
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.