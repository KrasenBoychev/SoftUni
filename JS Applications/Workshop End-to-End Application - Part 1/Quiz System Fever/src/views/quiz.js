import { getQuizQuestions } from "../data/questions.js";
import { getQuizById } from "../data/quzzes.js";
import { page, html, render, renderTemplate, } from "../lib.js";

let currentQuestion = null;
let totalQuestions = null;
let quizIdGlobal = null;
let correctAnswers = 0;

const quizTemplate = (quiz) => html`
        <section id="quiz">
                <header class="pad-large">
                    <h1>${quiz.title}: Question ${currentQuestion} / ${quiz.questionCount}</h1>
                    <nav class="layout q-control">
                        <span class="block">Question index</span>
                        ${showQIndex(quiz.questionCount, quiz.objectId)}
                    </nav>
                </header>
                <div class="pad-large alt-page">

                    <article class="question">
                    </article>

                </div>
            </section>
`;

const questionTemplate = (question, questionCount) => html`
        <p class="q-text">
            ${question.text}
        </p>

        <div id="options-answers">
            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle">${question.answers[0]}</i>
            </label>

            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle">${question.answers[1]}</i>
            </label>

            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle">${question.answers[2]}</i>
            </label>

        </div>

        <nav class="q-control">
            <span class="block">${questionCount - currentQuestion} questions remaining</span>
            <a class="action" href="javascript:void(0)" @click=${previousAnswer}><i class="fas fa-arrow-left"></i> Previous</a>
            <a class="action" href="javascript:void(0)" @click=${startOver}><i class="fas fa-sync-alt"></i> Start over</a>
            <div class="right-col">
                <a class="action" href="javascript:void(0)" @click=${nextAnswer}>Next<i class="fas fa-arrow-right"></i></a>
                <a class="action" href="javascript:void(0)" @click=${submitAnswers}>Submit answers</a>
            </div>
        </nav>
`;

export async function showQuiz(ctx) {
    const quizId = ctx.params.id;
    currentQuestion = Number(ctx.params.qId);

    const quiz = await getQuizById(quizId);

    const questions = await getQuizQuestions(quizId);
    const question = questions.results[currentQuestion - 1];
    const questionCount = quiz.questionCount;

    totalQuestions = questionCount;
    quizIdGlobal = quizId;

    render(quizTemplate(quiz));
    showQuestion(question, questionCount, quizId);

    //Test -> delete later
    const inputs = document.getElementById('options-answers').querySelectorAll('input');

    for (const input of inputs) {
        input.checked = false;
    }
}

function showQuestion(question, questionCount) {
    const root = document.querySelector('article[class="question"]');
    renderTemplate(questionTemplate(question, questionCount), root);


}

function showQIndex(questionCount, quizId) {
    let result = [];

    for (let i = 1; i <= questionCount; i++) {
        if (i < currentQuestion) {
            result.push(html`<a class="q-index q-answered" href="/quiz/${quizId}/${i}"></a>`);

        } else if (i == currentQuestion) {
            result.push(html`<a class="q-index q-current" href="/quiz/${quizId}/${i}"></a>`);

        } else {
            result.push(html`<a class="q-index" href="/quiz/${quizId}/${i}"></a>`);
        }
    }
    return result;
}

function submitAnswers() {

}

function startOver() {
    currentQuestion = null;
    totalQuestions = null;
    correctAnswers = 0;

    page.redirect(`/quiz/${quizIdGlobal}/1`);
}

function nextAnswer() {
    if (currentQuestion == totalQuestions) {
        return;
    }

    //checkAnswer();

    page.redirect(`/quiz/${quizIdGlobal}/${currentQuestion + 1}`);
}

function previousAnswer() {
    if (currentQuestion == 1) {
        return;
    }
    page.redirect(`/quiz/${quizIdGlobal}/${currentQuestion - 1}`);
}

// function checkAnswer() {
//     const inputs = document.getElementById('options-answers').querySelectorAll('input');
//     let hasAnswer = false;

//     for (let i = 0; i <= 2; i++) {
//         if (inputs[i].checked == true) {
//             hasAnswer = true;
//         }
//     }

//     if (hasAnswer == false) {
//         return;
//     }
// }







