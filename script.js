const startButton = document.getElementById("startGame");

startButton.addEventListener("click", startGame);
// listen for the click to start the game

function startButton() {
  // the argument for the start button
}

function nextQuestion() {
  // set up the next question on the list
}

function selectAnswer() {
  // selecting the correct answer
}
// startButton.onclick = startQuiz;

var questionsPage = document.getElementById("questionsPage");
var questionIndex = 0;
var timerCountDown = 60;
var countdown = "";
var scorePoints = 100;
var totalQuestions = 3;
var availableQuestions = [];

// function startQuiz // start button, click event
var startButton = document.getElementById("startGame");
function startQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide");
  questionsPage.removeAttribute("class", "hide");
  nextQuestion();
  // hide the start screen // unhide the question sections //start the timer and show the time// get the 1st question
  questions[questionIndex].choices.forEach(function (choice, i) {
    // create new button for each choice
    // attach click event listener to each choice
    // display on the page
  });
}

// // Store all h4 elements in a variable
// var siteTitles = document.querySelectorAll("h6");
// // Loop through all h4 elements to add styling
// for (var i = 0; i < siteTitles.length; i++) {
//   siteTitles[i].setAttribute("");
// }

// var secondsLeft = 1000;
// var i = 0;

// // * It's done when the countdown appears on the screen that indicates the number of seconds remaining before the speed reader begins.

// * It's done when, after the countdown ends, the words to the provided poem appear on the screen.

// * It's done when the words appear one at a time at the interval provided by the user.

// function timerCountDown() {
//   var timeLeft = 60;

//   var timeInterval = setInterval(function () {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       time();
//       clearInterval(timeInterval);
//     }
//   }, 1000);
// }
