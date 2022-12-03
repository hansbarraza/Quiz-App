var startBtn = document.getElementById("start-btn");
var startContent = document.getElementById("start-content");
var quizContent = document.getElementById("quiz");
var answerButtons = document.getElementById("answer-btns");

startBtn.addEventListener("click", startGame);


function startGame() {
    // startBtn.classList.add("hide")
    startContent.classList.add("hide");
    quizContent.classList.remove("hide");
}

function selectNextQuestion() {

}

function selectAnswer() {
    
}

answerButtons.addEventListener("click", selectAnswer);