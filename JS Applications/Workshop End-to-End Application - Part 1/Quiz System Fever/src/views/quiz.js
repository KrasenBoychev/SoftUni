import { getQuizQuestions } from "../data/questions.js";
import { getQuizById } from "../data/quzzes.js";
import { html, render, renderTemplate, } from "../lib.js";

let currentQuestion = 1;

const quizTemplate = (quiz, question) => html`
        <section id="quiz">
                <header class="pad-large">
                    <h1>${quiz.title}: Question ${currentQuestion} / ${quiz.questionCount}</h1>
                    <nav class="layout q-control">
                        <span class="block">Question index</span>
                        ${showQIndex(quiz.questionCount)}
                    </nav>
                </header>
                <div class="pad-large alt-page">

                    <article class="question">
                        ${showQuestion(question, quiz.questionCount)}
                    </article>

                </div>
            </section>
`;

const questionTemplate = (question, questionCount) => html`
        <p class="q-text">
            ${question.text}
        </p>

        <div>
            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle"></i>
                ${question.answers[0]}
            </label>

            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle"></i>
                ${question.answers[1]}
            </label>

            <label class="q-answer radio">
                <input class="input" type="radio" name="question-1" value="0" />
                <i class="fas fa-check-circle"></i>
                ${question.answers[2]}
            </label>

        </div>

        <nav class="q-control">
            <span class="block">${questionCount - currentQuestion} questions remaining</span>
            <a class="action" href=#><i class="fas fa-arrow-left"></i> Previous</a>
            <a class="action" href=#><i class="fas fa-sync-alt"></i> Start over</a>
            <div class="right-col">
                <a class="action" href=#>Next <i class="fas fa-arrow-right"></i></a>
                <a class="action" href=#>Submit answers</a>
            </div>
        </nav>
`;

function showQIndex(questionCount) {
    let result = [];

    for (let i = 1; i <= questionCount; i++) {
        if(i == 1) {
            result.push(html`<a class="q-index q-current" href="/question${i}"></a>`);

        } else {
            result.push(html`<a class="q-index" href="/question${i}"></a>`);
        }
    }
    return result;
}
// <a class="q-index q-current" href="#"></a>
//<a class="q-index q-answered" href="#"></a>
//<a class="q-index" href="#"></a>

function showQuestion(question, questionCount) {
    const root = document.querySelector('article[class="question"]');
    return renderTemplate(questionTemplate(question, questionCount), root);
}

export async function showQuiz(ctx) {
    const quizId = ctx.params.id;
    const quiz = await getQuizById(quizId);

    const questions = await getQuizQuestions(quizId);
    const question = questions.results[currentQuestion - 1];

    render(quizTemplate(quiz, question));
}



