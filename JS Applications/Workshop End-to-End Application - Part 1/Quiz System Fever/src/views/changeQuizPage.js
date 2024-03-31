import { page, html, render, renderTemplate, } from "../lib.js";
import { quizTemplate, questionTemplate, endpoints } from "./quiz.js";

export function showQuizPage(ctx) {
    if (ctx) {
        endpoints.currentQuestion = Number(ctx.params.qId);
    }

    const question = endpoints.questions[endpoints.currentQuestion - 1];

    if (endpoints.lastQuestion != null) {
        const previousQuestion = endpoints.questions[endpoints.lastQuestion - 1];
        const correctIndex = previousQuestion.correctIndex;
        checkAnswer(correctIndex);
    }

    endpoints.lastQuestion = endpoints.currentQuestion;
    render(quizTemplate(endpoints.quiz));
    showQuestion(question, endpoints.totalQuestions);
    tickTheUserAnswer();
}

function showQuestion(question, questionCount) {
    const root = document.querySelector('article[class="question"]');
    const questionsRemaining = (questionCount - Object.keys(endpoints.userAnswers).length);

    renderTemplate(questionTemplate(question, questionsRemaining), root);
}

function showQIndex(questionCount, quizId) {
    let result = [];

    for (let i = 1; i <= questionCount; i++) {

        if (i == endpoints.currentQuestion) {
            result.push(html`<a class="q-index q-current" href="/quiz/${quizId}/${i}"></a>`);

        } else if (i in endpoints.userAnswers) {
            result.push(html`<a class="q-index q-answered" href="/quiz/${quizId}/${i}"></a>`);

        } else {
            result.push(html`<a class="q-index" href="/quiz/${quizId}/${i}"></a>`);
        }
    }

    return result;
}

function checkAnswer(correctIndex) {
    const inputs = document.getElementById('options-answers').querySelectorAll('input');

    let userOption = null;
    let isCorrect = false;

    for (let i = 0; i <= 2; i++) {
        if (inputs[i].checked == true) {
            userOption = i;

            if (correctIndex == (userOption + 1)) {
                endpoints.correctAnswers++;
                isCorrect = true;
            }

            if (endpoints.lastQuestion in endpoints.userAnswers) {
                if (endpoints.userAnswers[endpoints.lastQuestion].isCorrect == true) {
                    endpoints.correctAnswers--;
                }
            }
        }
    }

    if (userOption != null) {
        endpoints.userAnswers[endpoints.lastQuestion] = { userOption, isCorrect };
    }
}

function tickTheUserAnswer() {
    const inputs = document.getElementById('options-answers').querySelectorAll('input');

    if (!(endpoints.currentQuestion in endpoints.userAnswers)) {
        for (const input of inputs) {
            input.checked = false;
        }

    } else {
        for (let i = 0; i <= 2; i++) {
            if (i == endpoints.userAnswers[endpoints.currentQuestion].userOption) {
                inputs[i].checked = true;

            } else {
                inputs[i].checked = false;
            }
        }
    }
}

function nextAnswer() {
    if (endpoints.currentQuestion == endpoints.totalQuestions) {
        return;
    }
    page.redirect(`/quiz/${endpoints.quizIdGlobal}/${endpoints.currentQuestion + 1}`);
}

function previousAnswer() {
    if (endpoints.currentQuestion == 1) {
        return;
    }
    page.redirect(`/quiz/${endpoints.quizIdGlobal}/${endpoints.currentQuestion - 1}`);
}

function startOver() {
    endpoints.lastQuestion = null;
    endpoints.currentQuestion = 1;
    endpoints.correctAnswers = 0;
    endpoints.userAnswers = {};

    page.redirect(`/quiz/${endpoints.quizIdGlobal}/1`);
}


async function submitAnswers() {
    const correctIndex = endpoints.questions[endpoints.currentQuestion - 1].correctIndex;
    checkAnswer(correctIndex);

    if (Object.keys(endpoints.userAnswers).length < endpoints.totalQuestions) {
        return alert('All questions must be answered!')
    }

    let percentageCorrectAnswers = (endpoints.correctAnswers / endpoints.totalQuestions) * 100;
    endpoints.percentageCorrectAnswers = percentageCorrectAnswers;

    page.redirect(`/results/${endpoints.quizIdGlobal}`);
}

export {
    showQIndex,
    nextAnswer,
    previousAnswer,
    startOver,
    submitAnswers
}