var startBtn = document.getElementById("start-btn");
var restartBtn = document.getElementById("restart-btn");
var startContent = document.getElementById("start-content");
var quizContent = document.getElementById("quiz");
var answerButtons = document.getElementById("answer-btns");
var timerbox = document.getElementById("timer");
var next = document.getElementById("next-btn");
var timer = 30;
var questionEl = document.getElementById("question");
var score = 0;
var results = document.getElementById("results-container");


var shuffledQuestions, currentQuestionIndex
startBtn.addEventListener("click", startGame);
next.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startContent.classList.add("hide");
    quizContent.classList.remove("hide");
    timerbox.classList.remove("hide");
    next.classList.remove("hide");
    var countdown = setInterval(function(){
        if(timer <= 0){
          clearInterval(countdown);
          document.getElementById("time-left").innerHTML = "Time's Up";
          document.getElementById("time").innerHTML = "0";
        } else {
          document.getElementById("time").innerHTML = timer;
        }
        timer -= 1;
      }, 1000);

      shuffledQuestions = question.sort(() => Math.random() - .5)
      currentQuestionIndex = 0
      setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener("click", selectAnswer)
        answerButtons.appendChild(button)
    })
}
function resetState() {
    clearStatusClass(document.body)
    next.classList.add("hide")
    while (answerButtons.firstChild){
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}


function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        next.classList.remove("hide")
    } else {
        // startBtn.innerText = "Restart"
        restartBtn.classList.remove("hide")
    }
}
    


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong") 
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function showResults(question, answerButtons, results){
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<question.length; i++){

    
    userAnswer = document.querySelector('button').dataset
     
      if(userAnswer===question[i].correctAnswer)
       
        numCorrect++;
    }
      
    

    
    results.innerHTML = numCorrect + ' out of ' + question.length;
} 

  restartBtn.onclick = function(){
    showResults(question, quizContent, results);
  }

var question = [
    {
        question:"Which car brand does NOT belong to General Motors?",
        answers:[
        {text:"Ford", correct: true},
        {text:"Buick", correct: false},
        {text:"Cadillac", correct: false},
        {text:"Chevrolet", correct: false}
        ]
    },
    {
        question:"When was Cadillac founded?",
        answers:[
        {text:"1964", correct: false},
        {text:"1985", correct: false},
        {text:"1902", correct: true},
        {text:"1898", correct: false}
        ]
    },
    {
        question:"Which of these car models are produced by Lamborghini?",
        answers:[
        {text:"Huayra", correct: false},
        {text:"Aventador", correct: true},
        {text:"Chiron", correct: false},
        {text:"918", correct: false}
        ]
    },
    {
        question:"Which Japanese company is the world's largest manufacturer of motorcycles?",
        answers:[
        {text:"Kawasaki", correct: false},
        {text:"Suzuki", correct: false},
        {text:"Yamaha", correct: false},
        {text:"Honda", correct: true}
        ]
    },
    {
        question:"Which of the following passenger jets is the longest?",
        answers:[
        {text:"Airbus A350-1000", correct: false},
        {text:"Boeing 747-8", correct: true},
        {text:"Airbus A330-200", correct: false},
        {text:"Boeing 747-8", correct: false}
        ]
    }
]