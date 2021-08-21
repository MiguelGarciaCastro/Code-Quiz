//setting up buttons
//timer
//setting up the variables

var timer = document.getElementById("timer");

var scores = document.getElementById("scores");
var buttons = document.getElementById("buttons")

var secondsLeft = 60;

var scores= document.getElementById("view-scores")
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", setTime);

var question = document.getElementById("questions");
var results = document.getElementById("results");
var choices = document.getElementById("choices");

//high score, results
var Array1 = JSON.parse(window.localStorage.getItem("highScore"));
var Array2 = JSON.parse(window.localStorage.getItem('lowScore'));
var questionCount = 0;
var score = 0

//function to get the clock going
function(secondsLeft){
    setTime
}
//function for scoore
function(storedArray)