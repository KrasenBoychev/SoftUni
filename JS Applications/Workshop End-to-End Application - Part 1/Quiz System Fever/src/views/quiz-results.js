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

const questionTemplate = () => html`
<article class="preview">
        <span class="s-correct">
            Question 1
            <i class="fas fa-check"></i>
        </span>
        <div class="right-col">
            <button class="action">See question</button>
        </div>
    </article>

    <article class="preview">
        <span class="s-correct">
            Question 2
            <i class="fas fa-check"></i>
        </span>
        <div class="right-col">
            <button class="action">See question</button>
        </div>
    </article>

    <article class="preview">
        <span class="s-incorrect">
            Question 3
            <i class="fas fa-times"></i>
        </span>
        <div class="right-col">
            <button class="action">Reveal answer</button>
        </div>
    </article>

    <article class="preview">
        <span class="s-incorrect">
            Question 4
            <i class="fas fa-times"></i>
        </span>
        <div class="right-col">
            <button class="action">Close</button>
        </div>

        <div>
            <p>
                This is the first question. Veniam unde beatae est ab quisquam quos officia, eius
                harum accusamus adipisci?
            </p>
            <div class="s-answer">
                <span class="s-incorrect">
                    This is answer 1
                    <i class="fas fa-times"></i>
                    <strong>Your choice</strong>
                </span>
            </div>
            <div class="s-answer">
                <span class="s-correct">
                    This is answer 2
                    <i class="fas fa-check"></i>
                    <strong>Correct answer</strong>
                </span>
            </div>
            <div class="s-answer">
                <span>
                    This is answer 3
                </span>
            </div>
    </article>
`;

export function showQuizResults(ctx) {
    render(quizResultsTemplate(quizDetails));
}

function quizDetails() {
    //TODO

    const root = document.getElementById('quiz-details-questions');
    renderTemplate(questionTemplate(), root);
}