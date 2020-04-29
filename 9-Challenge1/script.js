(function () {
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

  Question.prototype.checkAnswer = function (answer, callback) {
    var sc;
    if (answer === this.correct) {
      console.log("correct answer");
      sc = callback(true);
    } else {
      console.log("Wrong....");
      sc = callback(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function (score) {
    console.log("Your score is: " + score);
    console.log("---------------------");
  };

  var q1 = new Question(
    "Is JavaScript the coolest programing language in the world?",
    ["Yes", "No"],
    0
  );

  var q2 = new Question("What is your name?", ["Quy", "Luu", "Van"], 2);

  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Happy"],
    2
  );

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer...");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }

  nextQuestion();
})();
