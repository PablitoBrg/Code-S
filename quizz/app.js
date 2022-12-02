class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// Create a question Class
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// NOW DISPLAY THE QUESTIONS
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS ANSWER
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// SHOW SCORES
function showScores() {
    let quizEndHTML =
        `
    <h1>Quiz Completed</h1>
    <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="../index.html">Retour</a>
    </div>
    `;
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
};

// create questions here
let questions = [
    new Question(
        "Les rapports non protégés sont-ils dangeureux ?", ["oui", "non"], "oui"
    ),new Question(
        "Le VIH se transmet par rapport anal ?", ["oui", "non"], "oui"
    ),new Question(
        "Les félations et les cunnilingus peuvent être la source du Sida ?", ["oui", "non"], "oui"
    ),new Question(
        "Faut-il se faire tester dans le cas de relation exclusive à long terme ?", ["oui", "non"], "oui"
    ),new Question(
        "Les relations avec des professionels du sexe sont-elles plus à risque que les autres ?", ["oui", "non"], "non"
    ),new Question(
        "Est-ce que le partage de seringue augmente les chances d'être contaminé au VIH", ["oui", "non"], "oui"
    ),new Question(
        "Le Sida touche uniquement les hommes gays ?", ["oui", "non"], "non"
    ),new Question(
        "Quelle est la date de la journée de lutte contre le Sida ?", ["1 décembre", "5 juin"], "1 décembre"
    ),new Question(
        "Quelle est la corrélation entre le VIH et le Sida ?", ["Le Sida peut évolué vers le VIH", "Le VIH peut évolué vers le Sida"], "Le VIH peut évolué vers le Sida"
    ),new Question(
        "Si je n'ai pas de symptômes, cela signifie certainement que je ne suis pas malade", ["vrai", "faux"], "faux"
    ),new Question(
        "Le Sida se transmet par la salive", ["oui", "non"], "non"
    ),
];

// INITIALIZE quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();
