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

// var array = [];

// for (var i = 2; i < process.argv.length; i++) {
//     array.push(process.argv[i]);
// }

// console.log(array.join("+"));
// Austin Bruch Code
function sampleFunction() {
if (process.argv[2] === undefined){
    userInput = "Celine+Dion"
console.log("undefined");
}
    userInput = userInput;
console.log("defined as "+ userInput);};

sampleFunction();


if (process.argv.length > 3) ;
{	var userInput="";
    for (var i = 2; i < process.argv.length; i++)
	{
    userInput += "+" + process.argv[i];

	}
    userInput = userInput.substring(1);
    // console.log("After removal " + userInput);
}


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

function concertThis() {

    if(!process.argv[3]){
        artist = "Celine+Dion";
    }
   
if (process.argv.length > 2) {
    var artist = userInput;
        request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
            {
           
                console.log("Venue: " + JSON.parse(body)[0].venue.name);
                console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
                console.log("Date: " + momentPackage(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
        
            }
        });
    console.log(userInput)

     }
    // Tested Tool, Train, Anberlin, Tritonal, They Might Be Giants, The Black Keys
    else {
        console.log("Run Celine Dion")
        var artist = "Celine+Dion";
        request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
            {
           
                console.log("Venue: " + JSON.parse(body)[0].venue.name);
                console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
                console.log("Date: " + momentPackage(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
        
            }
        });
        
    }    
}

function spotifyThisSong() {

    spotify.search({
        type: 'track',
        query: userInput,
    }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log("artist name  :", response.tracks.items[0].album.artists[0].name);
        console.log("song name: ", response.tracks.items[0].name);
        console.log("preview url: ", response.tracks.items[0].href);
        console.log("Album name", response.tracks.items[0].album.name);
        ;


    });
}
//  integrate ace of base "the sign"
//    * If no song is provided then your program will default to "The Sign" by Ace of Base.
//    * You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
//    * The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:
//    * Step One: Visit <https://developer.spotify.com/my-applications/#!/>
//    * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
//    * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
//    * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).
function movieThis() {
    var movie = userInput
    var searchURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    request(searchURL, function (error, response, body) {
            var movie = {
                Title: JSON.parse(body).Title,
                Year: JSON.parse(body).Year,
                IMDB_Rating: JSON.parse(body).imdbRating,
                Rotten_Tomatoes_Rating: JSON.parse(body).Ratings[1].Value,
                Country: JSON.parse(body).Country,
                Language: JSON.parse(body).Language,
                Plot: JSON.parse(body).Plot,
                Actors: JSON.parse(body).Actors,
            }
        console.log("Completed");
        console.log(movie.Title);
        console.log(movie.Year);
        console.log(movie.imdbRating);
        // console.log(movie.Ratings[1].Value);
        console.log(movie.Country);
        console.log(movie.Language);
        console.log(movie.Plot);
        console.log(movie.Actors);
    //   Got to finish console.log this data
    });
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
{console.log("do-what-it-says");
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
