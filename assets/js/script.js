var titleQuestion = document.getElementById("CodeQuestions");
var introDescription = document.getElementById("QuizDescription");
var quizAnswerOptions = document.getElementById("AnswerChoices")
var options = document.getElementById("quiz")
var startButton = document.createElement("button");
var timeEl = document.querySelector(".time");
var secondsleft = 60;

var QuizQuestions = [
    {question: "Inside which HTML element do we put the Javascript?",
    choices: ['<p>', '<ol>', '<link>', '<script>'],
    answer: '<script>'
}]

function renderQuestions () {
    titleQuestion.textContent = "";
    introDescription.textContent = "";
    quizAnswerOptions.remove(quizAnswerOptions.firstChild);
    
    for (i=0; i<QuizQuestions.length; i++) {
        titleQuestion.textContent = QuizQuestions[i].question;
        options.textContent = QuizQuestions[i].choices;
    }
}

function startTimer () {
    var timerInterval = setInterval(function () {
        secondsleft--;
        timeEl.textContent = "Time Remaining: " + secondsleft + " Seconds";

        if (secondsleft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "Quiz Over"
        }
    }, 1000)
}
 
startButton.addEventListener("click", function() {
    startButton = document.getElementsByTagName("button");
    startTimer();
    renderQuestions();
})

function init() {
    titleQuestion.textContent = "Welcome to Your Practice Coding Quiz!";
    introDescription.textContent = "Please answer the following questions within the time alloted. The quiz will be over when you run out of time. Wrong answers will deduct time from your balance.";
    startButton.textContent = "Start Quiz";
    quizAnswerOptions.append(startButton);
}

init();
