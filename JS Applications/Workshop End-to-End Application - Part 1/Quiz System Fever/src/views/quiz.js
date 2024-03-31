import { getQuizQuestions } from "../data/questions.js";
import { getQuizById } from "../data/quzzes.js";
import { page, html, render, renderTemplate, } from "../lib.js";
import { showQIndex, nextAnswer, previousAnswer, startOver, submitAnswers, showQuizPage } from "./changeQuizPage.js";

export const endpoints = {
    quiz: null,
    questions: null,
    correctAnswers: 0,
    currentQuestion: 1,
    lastQuestion: null,
    totalQuestions: null,
    quizIdGlobal: null,
    userAnswers: {}
}

export const quizTemplate = (quiz) => html`
        <section id="quiz">
                <header class="pad-large">
                    <h1>${quiz.title}: Question ${endpoints.currentQuestion} / ${quiz.questionCount}</h1>
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

export const questionTemplate = (question, questionsRemaining) => html`
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
            <span class="block">${questionsRemaining} questions remaining</span>
            <a class="action" href="javascript:void(0)" @click=${previousAnswer}><i class="fas fa-arrow-left"></i> Previous</a>
            <a class="action" href="javascript:void(0)" @click=${startOver}><i class="fas fa-sync-alt"></i> Start over</a>
            <div class="right-col">
                <a class="action" href="javascript:void(0)" @click=${nextAnswer}>Next<i class="fas fa-arrow-right"></i></a>
                <a class="action" href="javascript:void(0)" @click=${submitAnswers}>Submit answers</a>
            </div>
        </nav>
`;

export async function openQuiz(ctx) {
    const quizId = ctx.params.id;
    const currentQuiz = await getQuizById(quizId);
    const questionCount = currentQuiz.questionCount;
    const allQuestions = await getQuizQuestions(quizId);

    endpoints.totalQuestions = questionCount;
    endpoints.quizIdGlobal = quizId;
    endpoints.quiz = currentQuiz;
    endpoints.questions = allQuestions;

    showQuizPage();    
}