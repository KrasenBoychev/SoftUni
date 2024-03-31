import { page, html, render, renderTemplate, } from "../lib.js";
import { endpoints } from "./quiz.js";


const quizResultsTemplate = (quizDetails) => html`
    <section id="summary">
        <div class="hero layout">
            <article class="details glass">
                <h1>Quiz Results</h1>
                <h2>${endpoints.quiz.title}</h2>

                <div class="summary summary-top">
                    ${endpoints.percentageCorrectAnswers}%
                </div>

                <div class="summary">
                    ${endpoints.correctAnswers}/${endpoints.totalQuestions} correct answers
                </div>

                <a class="action cta" href="/quiz/${endpoints.quizIdGlobal}"><i class="fas fa-sync-alt"></i> Retake Quiz</a>
                <a class="action cta" href="javascript:void(0)" @click=${quizDetails}><i class="fas fa-clipboard-list"></i> See Details</a>

            </article>
        </div>

        <div id="quiz-details-questions" class="pad-large alt-page">
        </div>
        </section>
`;  

const questionTemplate = (question, spanClass, iClass, btnText) => html`
<article class="preview">
        <span class=${spanClass}>
            ${question.text}
            <i class=${iClass}></i>
        </span>
        <div class="right-col">
            <button class="action">${btnText}</button>
        </div>
    </article>
`;

export function showQuizResults(ctx) {
    render(quizResultsTemplate(quizDetails));
}

function quizDetails() {
    const root = document.getElementById('quiz-details-questions');
    renderTemplate(renderQuestions(), root);
}

function renderQuestions() {
    let countQuestion = 1;

    return endpoints.questions.results.map(question => {
        let spanClass = null;
        let iClass = null;
        let btnText = null;

        if (endpoints.userAnswers[countQuestion].isCorrect == true) {
            spanClass = "s-correct";
            iClass = "fas fa-check";
            btnText = "See question";

        } else {
            spanClass = "s-incorrect";
            iClass = "fas fa-times";
            btnText = "Reveal answer";
        }

        countQuestion++;
        return questionTemplate(question, spanClass, iClass, btnText)})
}