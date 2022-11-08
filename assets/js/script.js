var titleQuestion = document.getElementById("CodeQuestions");
var introDescription = document.getElementById("QuizDescription");
var quizAnswerOptions = document.getElementById("AnswerChoices")
var startButton = document.createElement("button");

function init() {
    titleQuestion.textContent = "Welcome to Your Practice Coding Quiz!";
    introDescription.textContent = "Please answer the following questions within the time alloted. The quiz will be over when you run out of time. Wrong answers will deduct time from your balance.";
    startButton.textContent = "Start Quiz";
    quizAnswerOptions.append(startButton);
}

init();
