import { leavePage } from "../data/notifications.js";
import { createSolution } from "../data/solutions.js";
import { page, html, render, renderTemplate, } from "../lib.js";
import { getUserData } from "../util.js";
import { quizTemplate, questionTemplate, endpoints } from "./quiz.js";

export function showQuizPage(ctx) {
    leavePage();

    if (ctx) {
        endpoints.currentQuestion = Number(ctx.params.qId);
    }

    const question = endpoints.questions[endpoints.currentQuestion - 1];

    if (endpoints.lastQuestion != null) {
        const previousQuestion = endpoints.questions[endpoints.lastQuestion - 1];
        const correctIndexes = previousQuestion.correctIndex;
        checkAnswer(correctIndexes);
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

function checkAnswer(correctIndexes) {
    const inputs = document.getElementById('options-answers').querySelectorAll('input');

    let userOptions = [];
    let isCorrect = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            userOptions.push(i);
        }
    }

    if (JSON.stringify(correctIndexes) == JSON.stringify(userOptions)) {
        endpoints.correctAnswers++;
        isCorrect = true;
    }

    if (endpoints.lastQuestion in endpoints.userAnswers) {
        if (endpoints.userAnswers[endpoints.lastQuestion].isCorrect == true) {
            endpoints.correctAnswers--;
        }
    }

    if (userOptions.length > 0) {
        endpoints.userAnswers[endpoints.lastQuestion] = { userOptions, isCorrect };
    }
}

function tickTheUserAnswer() {
    const inputs = document.getElementById('options-answers').querySelectorAll('input');

    if (!(endpoints.currentQuestion in endpoints.userAnswers)) {
        for (const input of inputs) {
            input.checked = false;
        }

    } else {
        for (let i = 0; i < inputs.length; i++) {
            if (endpoints.userAnswers[endpoints.currentQuestion].userOptions.includes(i)) {
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


function submitAnswers() {
    const correctIndexex = endpoints.questions[endpoints.currentQuestion - 1].correctIndex;
    checkAnswer(correctIndexex);

    if (Object.keys(endpoints.userAnswers).length < endpoints.totalQuestions) {
        return alert('All questions must be answered!');
    }

    let percentageCorrectAnswers = (endpoints.correctAnswers / endpoints.totalQuestions) * 100;
    endpoints.percentageCorrectAnswers = percentageCorrectAnswers;

    sendSolutionRequest();

    page.redirect(`/results/${endpoints.quizIdGlobal}`);
}

async function sendSolutionRequest() {
    const userData = getUserData();
    const userPointer = { __type: "Pointer", className: "_User", objectId: userData.objectId };
    const quizPointer = { __type: "Pointer", className: "Quizzes", objectId: endpoints.quizIdGlobal};
    
    await createSolution({quiz: quizPointer, correct: endpoints.correctAnswers, userId: userPointer});
}

export {
    showQIndex,
    nextAnswer,
    previousAnswer,
    startOver,
    submitAnswers
}