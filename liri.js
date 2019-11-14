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

// Austin Bruch Code
// var array = [];
// for (var i = 2; i < process.argv.length; i++) {
//     array.push(process.argv[i]);
// }
// console.log(array.join("+"));


if (process.argv.length > 3) ;
{	var userInput="";
    for (var i = 2; i < process.argv.length; i++)
	{
    userInput += "+" + process.argv[i];
	}
    userInput = userInput.substring(1);
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
    concertThisCheck();
    var artist = userInput;
        request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp", function (error, response, body) {
            {
                console.log("Venue: " + JSON.parse(body)[0].venue.name);
                console.log("Location: " + JSON.parse(body)[0].venue.city + ", " + JSON.parse(body)[0].venue.region);
                console.log("Date: " + momentPackage(JSON.parse(body)[0].datetime).format("MM/DD/YYYY"));
            }
        });
    console.log(userInput)
     };


function spotifyThisSong() {
    spotifyThisCheck();
    spotify.search({
        type: 'track',
        query: userInput,
    }, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
else {
    // console.log("artist name  :", response.tracks.items[0].album.artists[0].name);
    // console.log("song name: ", response.tracks.items[0].name);
    // console.log("preview url: ", response.tracks.items[0].href);
    // console.log("Album name", response.tracks.items[0].album.name);

    for (var i = 0; i < 3; i++) {
        // The sign doesn't show up until the third result...
        spotifyThisArray = 
        console.log("artist name  :", response.tracks.items[i].album.artists[0].name);
        console.log("song name: ", response.tracks.items[i].name);
        console.log("preview url: ", response.tracks.items[i].href);
        console.log("Album name", response.tracks.items[i].album.name);
        console.log(spotifyThisArray);
    };
    }});
};

function movieThis() {
    movieThisCheck() ;
    var movie = userInput
    var searchURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    request(searchURL, function (error, response, body) {
            var movie = {
                Title: JSON.parse(body).Title,
                Year: JSON.parse(body).Year,
                IMDB_Rating: JSON.parse(body).imdbRating,
                // Rotten_Tomatoes_Rating: JSON.parse(body).Ratings[1].Value,
                // returning undefined, for Mr. Nobody
                Country: JSON.parse(body).Country,
                Language: JSON.parse(body).Language,
                Plot: JSON.parse(body).Plot,
                Actors: JSON.parse(body).Actors,
                }
        // fsPackage.appendFile("log.txt", "Title: " + movie.Title + "\n"),
        console.log("Completed");
        // console.log(JSON.parse(body));
        console.log(movie.Title);
        console.log(movie.Year);
        console.log(movie.imdbRating);
        // console.log(movie.Ratings[1].Value);
        console.log(movie.Country);
        console.log(movie.Language);
        console.log(movie.Plot);
        console.log(movie.Actors);
    });
}


function doWhatItSays() {
fsPackage.readFile('random.txt', 'utf8', function(err, data){
		if (err){ 
			return console.log(err);
        }
        
        var testArray = data.split(',');
        spotifyThisSong(testArray[1]);
        console.log(testArray);
	});
}});

// 4. `node liri.js do-what-it-says`
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Edit the text in random.txt to test out the feature for movie-this and concert-this


function concertThisCheck() {
if (process.argv[2] === undefined){
    userInput = "Celine+Dion"
console.log("undefined, therefore searching " + userInput);
}
    userInput = userInput;
};

function spotifyThisCheck() {
    if (process.argv[2] === undefined){
        userInput = "The+Sign"
console.log("undefined, therefore searching " + userInput);
    }
        userInput = userInput;
};

function movieThisCheck() {
if (process.argv[2] === undefined){
    userInput = "Mr+Nobody"
console.log("undefined, therefore searching " + userInput);
}
    userInput = userInput;
};
