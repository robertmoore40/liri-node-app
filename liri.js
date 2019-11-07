require("dotenv").config();

var keys = require("./keys.js");
var request = require('request');
var inquirer = require('inquirer');
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var axiosPackage = require("axios");
var momentPackage = require("moment");
var fsPackage = require("fs"); 
var userInput = process.argv[2];

console.log(userInput);

// var userInput="";
// var userInput = process.argv.splice(2, process.argv.length - 1)
// var userInput = process.argv.join('');
// console.log(userInput);
// if (process.argv.length > 3){
// 	for (var i = 3; i < process.argv.length; i++)
// 	{
//         // userInput += userInput.join("+");
//         var userInput = process.argv.join('');
//         console.log(userInput);
//         // userInput +=process.argv[i] + "+";
//         console.log("if returned");
//         console.log(userInput);
//     }}
// else { 
//     console.log("else returned");
//     console.log(userInput);
// };
    

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
    }
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
function concertThis() {
    console.log("concert-this");
    console.log(userInput);
    if (userInput === undefined) {
        userInput = "Celine Dion";
    }

    var artist = userInput;
    // Homework instructions want an arguement variable change to artist
        request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
            {
           
                console.log("Venue: " + JSON.parse(body)[0].venue.name);
                console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
                console.log("Date: " + momentPackage(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
        
            }
        });
    console.log(userInput)
    // Celine Dion - Montreal given, no region (Similar to Project1 Error - Only works correctly int the USA)
    // Tested Tool, Train, Anberlin, Tritonal
    // Multiple word inputs not working, venue error if no concert upcoming on spotify API
    // 
}

function spotifyThisSong() {
    console.log("spotify-this-song");
    console.log(userInput);
    if (userInput === undefined) {
        userInput = "The Sign";
    }
    console.log(userInput)
    
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
    if (userInput === undefined) {
        userInput = "Mr. Nobody";
    }
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
if (userInput === undefined) {
    userInput = "I Want It That Way";
    spotifyThisSong(userInput);
}
}});

// 4. `node liri.js do-what-it-says`
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.