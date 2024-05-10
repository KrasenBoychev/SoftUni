import { getQuizQuestions } from "../data/questions.js";
import { getQuizById } from "../data/quizzes.js";
import { html } from "../lib.js";
import {
  showQIndex,
  nextAnswer,
  previousAnswer,
  startOver,
  submitAnswers,
  showQuizPage,
} from "./quiz-page-change.js";

export const endpoints = {
  quiz: null,
  questions: null,
  quizIdGlobal: null,
  lastQuestion: null,
  totalQuestions: null,
  percentageCorrectAnswers: null,
  correctAnswers: 0,
  currentQuestion: 1,
  userAnswers: {},
};

export const quizTemplate = (quiz) => html`
  <section id="quiz">
    <header class="pad-large">
      <h1>
        ${quiz.title}: Question ${endpoints.currentQuestion} /
        ${quiz.questionCount}
      </h1>
      <nav class="layout q-control">
        <span class="block">Question index</span>
        ${showQIndex(quiz.questionCount, quiz.objectId)}
      </nav>
    </header>
    <div class="pad-large alt-page">
      <article class="question"></article>
    </div>
  </section>
`;

export const questionTemplate = (question, questionsRemaining, correctAnswers) => html`
  <p class="q-text">
    ${question.text}
    <p class="correct-answers ${correctAnswers}">There is more than one correct answer!</p>
  </p>
  
  <div id="options-answers">
    ${question.answers.map((answer, counter) =>
      answerTemplate(answer, counter)
    )}
  </div>
  <nav class="q-control">
    <span class="block">${questionsRemaining} questions remaining</span>
    <a class="action" href="javascript:void(0)" @click=${previousAnswer}
      ><i class="fas fa-arrow-left"></i> Previous</a
    >
    <a class="action" href="javascript:void(0)" @click=${startOver}
      ><i class="fas fa-sync-alt"></i> Start over</a
    >
    <div class="right-col">
      <a class="action" href="javascript:void(0)" @click=${nextAnswer}
        >Next<i class="fas fa-arrow-right"></i
      ></a>
      <a class="action" href="javascript:void(0)" @click=${submitAnswers}
        >Submit answers</a
      >
    </div>
  </nav>
`;

const answerTemplate = (answer, counter) => html`
  <label class="q-answer">
    <input type="checkbox" name="question-${counter}" value="${counter++}" />
    ${answer}
  </label>
`;

export async function openQuiz(ctx) {
  clearEndpointsValues();

  const quizId = ctx.params.id;
  const currentQuiz = await getQuizById(quizId);
  const questionCount = currentQuiz.questionCount;
  const allQuestions = await getQuizQuestions(quizId);

  endpoints.totalQuestions = questionCount;
  endpoints.quizIdGlobal = quizId;
  endpoints.quiz = currentQuiz;
  endpoints.questions = allQuestions.results;

  showQuizPage();
}

export function clearEndpointsValues() {
  endpoints.quiz = null;
  endpoints.questions = null;
  endpoints.quizIdGlobal = null;
  endpoints.lastQuestion = null;
  endpoints.totalQuestions = null;
  endpoints.percentageCorrectAnswers = null;
  endpoints.correctAnswers = 0;
  endpoints.currentQuestion = 1;
  endpoints.userAnswers = {};
}
