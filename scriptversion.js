const startButton = document.getElementById("btn-success");
console.log("btn-success");

const shuffledQuestions, currentQuestions;

// function startGame() {
//   //   to start
//   controlButtons.classList.add("hide");
//   console.log("controlButtons");
//   questionPage.Element.classList.remove("hide");
//   nextQuestion();
// }
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

function nextQuestion() {
  // set up the next question on the list
}

function selectAnswer() {
  // selecting the correct answer
}
// startButton.onclick = startQuiz;

const questions = [
  { question: "Question 1: The basic syntax for JQuery is..." },
];
