// start button, click event
var questionsPage = document.getElementById("questionsPage");
var questionIndex = 0;
// function startQuiz
var startButton = document.getElementById("startGame");
function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", "hide");
  questionsPage.removeAttribute("class", "hide");
  nextQuestion();
  // hide the start screen
  // unhide the question sections
  // start the timer and show the time
  // get the 1st question
}
function nextQuestion() {
  questions[questionIndex];
  var title = document.getElementById("questionTitle");
  title.textContent = questions[questionIndex].question;
}
// function choices() {questions[questionIndex].choices.forEach(function(choice, i) {
//   // create new button for each choice
//   // attach click event listener to each choice
//   // display on the page
// });

// THEN a timer starts
// presented with a question 1
// WHEN I answer a question, submit

// button click, each button listen for a click, execute a function question click to see if answer was wrong or right
// tell them if tehy are wrong or right
// quiz end quiz if not the next qiestion function

// the questions end when the length is questions.length-1
// depending on which button is clicked, 4 click event button, add a vlue and bring that into js

// presented with a question 2
// WHEN I answer a question, submit

// if WHEN I answer a question incorrectly
// WHEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over
// // THEN I can save my initials and my score

// // toggle between start over

// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 30;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left";

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "");
//   mainEl.appendChild(imgEl);
// }

// setTime();

startButton.onclick = startQuiz;
