//setting up buttons
//timer
//setting up the variables
//high score, results
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

var storedArray = JSON.parse(window.localStorage.getItem("highScore"));
var storedArray = JSON.parse(window.localStorage.getItem('lowScore'));
var questionCount = 0;
var score = 0

//function to get the clock going
function(secondsLeft){
    setTime
}