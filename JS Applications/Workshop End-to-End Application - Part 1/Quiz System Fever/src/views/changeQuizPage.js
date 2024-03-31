import { page, html, render, renderTemplate, } from "../lib.js";
import { quizTemplate, questionTemplate, endpoints } from "./quiz.js";

export let quizInfo = {};

export function showQuizPage(ctx) {
    //const question = endpoints.questions.results[endpoints.currentQuestion - 1];
    const question = endpoints.questions.results[endpoints.currentQuestion];

    if (endpoints.lastQuestion != null) {
        const previousQuestion = endpoints.questions.results[endpoints.lastQuestion - 1];
        const correctIndex = previousQuestion.correctIndex;
        checkAnswer(correctIndex);
    }

    endpoints.lastQuestion = endpoints.currentQuestion;
    render(quizTemplate(endpoints.quiz));
    showQuestion(question, endpoints.totalQuestions, endpoints.quizIdGlobal);
    tickTheUserAnswer();
}

function showQuestion(question, questionCount, quizId) {
    const root = document.querySelector('article[class="question"]');
    const questionsRemaining = (questionCount - Object.keys(endpoints.userAnswers).length) - 1;

    renderTemplate(questionTemplate(question, questionsRemaining, quizId), root);
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

    for (let i = 0; i <= 2; i++) {
        if (inputs[i].checked == true) {
            userOption = i;

            if (correctIndex == (userOption + 1)) {
                endpoints.correctAnswers++;
            }
        }
    }

    if (userOption != null) {
        endpoints.userAnswers[endpoints.lastQuestion] = userOption;
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
            if (i == endpoints.userAnswers[endpoints.currentQuestion]) {
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
    endpoints.currentQuestion = null;
    endpoints.lastQuestion = null;
    endpoints.totalQuestions = null;
    endpoints.correctAnswers = 0;
    endpoints.userAnswers = {}

    page.redirect(`/quiz/${endpoints.quizIdGlobal}/1`);
}


async function submitAnswers() {
    const questions = await getQuizQuestions(endpoints.quizIdGlobal);
    const question = questions.results[endpoints.currentQuestion - 1];
    const correctIndex = question.correctIndex;

    checkAnswer(correctIndex);

    if (Object.keys(endpoints.userAnswers).length < endpoints.totalQuestions) {
        return alert('All questions must be answered!')
    }

    let percentageCorrectAnswers = (endpoints.correctAnswers / endpoints.totalQuestions) * 100;
    quizInfo['correctAnswers'] = percentageCorrectAnswers;

    page.redirect(`/results/${endpoints.quizIdGlobal}`);

    endpoints.correctAnswers = 0;
    endpoints.currentQuestion = null;
    endpoints.lastQuestion = null;
    endpoints.totalQuestions = null;
    endpoints.quizIdGlobal = null;
    endpoints.userAnswers = {};
}

export {
    showQIndex,
    nextAnswer, 
    previousAnswer,
    startOver, 
    submitAnswers
}