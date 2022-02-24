'use strict'
function quiz() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function (answer) {
        if (answer === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer. Try again');
        }
    }

    var q1 = new Question('Какая служба электронной почты принадлежит компании Microsoft?', ['Outlook', 'Yahoo Mail', 'Gmail', 'iCloud Mail'], 0);
    var q2 = new Question('За какую страну играл Дэвид Бекхэм?', ['Испания', 'Бразилия', 'США', 'Англия'], 3);
    var q3 = new Question('В какой стране находится Прага?', ['Испания', 'Бразилия', 'Чехия', 'Англия'], 2);

    var questions = [q1, q2, q3];
    var n = Math.floor(Math.random() * questions.length);
    questions[n].displayQuestion();
    var answer = parseInt(prompt('Please select the correct answer.'));
    questions[n].checkAnswer(answer);
}
quiz();