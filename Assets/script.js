// / Dependencies
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
// listen for the click to start the game

// STARTING DATA =====================================
var isWin = false;
var timer;
var timerCount;
var winCounter = 0;
var loseCounter = 0;

// Arrays used qjestions and answers screen
var totalQuestions = 3;


const questions = [
  {
    question: "Question 1: The basic syntax for JQuery is...",
    answers: [
      {text: "A: $(selector).action()", correct: true },
      {text: "B: [selector].action()", correct: false },
      {text: "C: #(selector).function()", correct: false },
      {text: "D: #$(method).function()", correct: false },
    ],
    // answer: "A:$(selector).action()",
  },
  {
    question: "Question 2: JavaScript syntax is the set of rules that...",
    choices: [
      {text: "A:// Declare Variables"},
      {text: "B:// Assign Value"},
      {text: "C:// Compute Values"},
      {text: "D: All of the above"},
    ],
    answer: "D",
  },
  {
      question: "Question 3: A CSS syntax consists of a selector and a declaration block:",
    choices: [
      {text: "A: The declaration block contains no useful information."},
      {text: "B: Multiple CSS declarations are separated with semicolons."},
      {text: "C: The selector points to the HTML element you want to style."},
     {text:  "D: Declaration blocks are surrounded by parenthesis."},
    ],
    answer: "C",
  },
];

// Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];


// The init function is called when the page loads 
function init() {
  getWins();
  getlosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}


// function startQuiz // start button, click event
var startGame = document.getElementById("startButton");
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
