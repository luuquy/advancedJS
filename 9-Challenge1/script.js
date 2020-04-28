function Question(question, answer, correct) {
  this.question = question;
  this.answer = answer;
  this.correct = correct;
}

Question.prototype.displayQuestion = function () {
  console.log(this.question);
  for (let index = 0; index < this.answer.length; index++) {
    console.log(index + ": " + this.answer[index]);
  }
};

Question.prototype.checkAnswer = function (answer) {
  if (answer === this.correct) {
    console.log("correct answer");
  } else {
    console.log("Wrong....");
  }
};

var q1 = new Question(
  "Is JavaScript the coolest programing language in the world?",
  ["Yes", "No"],
  0
);

var q2 = new Question("What is your name?", ["Quy", "Luu", "Van"], 2);

var q3 = new Question(
  "What does best descibe coding?",
  ["Boring", "Hard", "Fun", "Tediuos"],
  2
);

var questions = [q1, q2, q3];

var n = Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();

var answer = parseInt(prompt("Please select the correct answer..."));

questions[n].checkAnswer(answer);
