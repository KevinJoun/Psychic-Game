var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = 1
function random(){
    return letters[Math.floor(Math.random() * letters.length)];
}
randomLetter = random();


document.onkeyup = function(event) {
    var userChoice = event.key;
    if (userChoice !== randomLetter){  //if user choice = the randomly generated number
        guessesLeft--; //reduce the guessesLeft by 1.
        document.getElementById("guessedSoFar").append(" " + userChoice.toUpperCase());
    } else if (userChoice === randomLetter){
        wins++;
        guessesLeft = 10;
        document.getElementById("guessedSoFar").innerHTML = ("Your Guesses so far:");
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        randomLetter = random();
        //Some code to recreate a random number for randomLetter variable. So that the game can reset.
    }

    if(guessesLeft === 0){
        losses++;
        guessesLeft = 10;
        document.getElementById("guessedSoFar").innerHTML = ("Your Guesses so far:");
        document.getElementById("losses").innerHTML ="Losses: " + losses;
        randomLetter = random();
    }

    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

}
//PseudoCode:
// Game starts when the page is loaded.
// Random letter is picked.
// Show wins and losses as 0.
// Show guesses Left as 9
// wait for user key input.
// if user presses a key that does not equal to the randomly generated letter
// then reduces guesses left by 1. 
// Add that key to the guesses so far.
// if user presses a key that is equal to the randomly generated letter
// then add 1 to wins
// and reset the guesses left count back to 9 and guesses so far to blank.