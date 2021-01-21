var questionsPage = document.getElementById("questionsPage");
var questionIndex = 0;
var timerCountDown = 60;
var countdown = "";
// function startQuiz // start button, click event
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
function choices() {
  questions[questionIndex].choices.forEach(function callAnswer(choice, i) {
var answer = document.getElementById("theAnswer");
answer.textContent = questions[questionIndex].choices;
});

// function showQuestion(i) {
//   var html = "";
//   var current_q = questions[i];
//   html += `<h2>${current_q.q}</h2>`;
//   // add the answers (as buttons) buttons need listener...
//   for (b = 0; b < current_q.a.length; b++) {
//     html += `<button class="buttons" onclick="check_answer(${i},${b})">${current_q.a[b]}</button>`;
//   }
//   // display in the quiz div
//   document.getElementById("quiz").innerHTML = html;
// function check_answer(questionNumber, answerIndex) {
//   //prompt(questionNumber + " " + answerIndex);
//   // For the incoming question number, see if the correct answerIndex was clicked.
//   var current_q = questions[questionNumber];
//   if (current_q.c === answerIndex) {
//     console.log("correct");
//     document.getElementById("message").innerHTML =
//       "<h2>Correct! Good job!</h2>";

//   // create new button for each choice
  // attach click event listener to each choice
  // display on the page
});

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
