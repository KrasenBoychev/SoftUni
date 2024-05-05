import { removeNavEventListener } from "../data/notifications.js";
import { html, render, renderTemplate, } from "../lib.js";
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

const questionTemplate = (question, spanClass, iClass, btnText, questionIndex) => html`
    <article class="preview">
        <span class=${spanClass}>
            Question ${questionIndex + 1}
            <i class=${iClass}></i>
        </span>
        <div class="right-col">
            <button class="action" @click=${seeQuestion} data-id="${questionIndex}">${btnText}</button>
        </div>

        <div id="see-answers-${questionIndex}" class="hidden">
            <p>${question.text}</p>

            <div id="answers-section">
                ${renderAnswers(question, questionIndex)}
            </div>
        </div>
    </article>
`;

export function showQuizResults(ctx) {
    removeNavEventListener();
    render(quizResultsTemplate(quizDetails));
}

function quizDetails() {
    const root = document.getElementById('quiz-details-questions');
    renderTemplate(renderQuestions(), root);
}

function renderQuestions() {
    let countQuestion = 1;

    return endpoints.questions.map(question => {
        let questionIndex = countQuestion - 1;
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
        return questionTemplate(question, spanClass, iClass, btnText, questionIndex)
    })
}

function seeQuestion(e) {
    const questionIndex = e.target.dataset.id;

    if (e.target.textContent == 'Close') {
        document.getElementById(`see-answers-${questionIndex}`).classList.add('hidden');
        if (e.target.parentElement.parentElement.querySelector('span').className == 's-correct') {
            e.target.textContent = "See question";
        } else {
            e.target.textContent = "Reveal answer";
        }

    } else {
        document.getElementById(`see-answers-${questionIndex}`).classList.remove('hidden');
        e.target.textContent = "Close";
    }
}

function renderAnswers(question, questionIndex) {
    const userOptions = endpoints.userAnswers[questionIndex + 1].userOptions;
    const correctIndexes = question.correctIndex;
    let result = [];

    for (let i = 0; i < question.answers.length; i++) {

        if (userOptions.includes(i) && correctIndexes.includes(i)) {
            result.push(html` <div class="s-answer">
                                <span class="s-correct">
                                    ${question.answers[i]}
                                    <i class="fas fa-check"></i>
                                    <strong>Your choice</strong>
                                </span>
                               </div>`);
        } else if (userOptions.includes(i) && !correctIndexes.includes(i)) {
            result.push(html` <div class="s-answer">
                                <span class="s-incorrect">
                                    ${question.answers[i]}
                                    <i class="fas fa-times"></i>
                                    <strong>Your choice</strong>
                                </span>
                               </div>`);
        } else if (!userOptions.includes(i) && correctIndexes.includes(i)) {
            result.push(html` <div class="s-answer">
                                    <span class="s-correct">
                                    ${question.answers[i]}
                                        <i class="fas fa-check"></i>
                                    <strong>Correct answer</strong>
                                    </span>
                                </div>`);
        } else {
            result.push(html` <div class="s-answer">
                                  <span>
                                  ${question.answers[i]}
                                  </span>
                              </div>`);
        }
    }

    return result;
}