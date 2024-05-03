import { deleteQuestion, getQuizQuestions } from "../data/questions.js";
import {
  deleteQuiz,
  getQuizById,
  getQuizzesByOwnerId,
} from "../data/quizzes.js";
import { getSolutionsByUserId } from "../data/solutions.js";
import { html, render, renderTemplate } from "../lib.js";
import { getUserData } from "../util.js";

const profileTemplate = (userData, quizzes, solutions, onDeleteQuiz) => html`
  <section id="profile">
    <header class="pad-large">
      <h1>Profile Page</h1>
    </header>

    <div class="hero pad-large">
      <article class="glass pad-large profile">
        <h2>Profile Details</h2>
        <p>
          <span class="profile-info">Username:</span>
          ${userData.username}
        </p>
        <p>
          <span class="profile-info">Email:</span>
          ${userData.email}
        </p>
        <h2>Your Quiz Results</h2>
        <table class="quiz-results">
          <tbody></tbody>
        </table>
      </article>
    </div>

    <header class="pad-large">
      <h2>Quizes created by you</h2>
    </header>

    <div class="pad-large alt-page">
      ${quizzes.map((quiz) => quizTemplate(quiz, solutions, onDeleteQuiz))}
    </div>
  </section>
`;

const resolvedQuizTemplate = (
  quiz,
  solution,
  formatDate,
  percentage,
  questionCount
) => {
  return html`
    <tr class="results-row">
      <td class="cell-1">${formatDate}</td>
      <td class="cell-2">
        <a href="/details/${quiz.objectId}">${quiz.title}</a>
      </td>
      <td class="cell-3 s-correct">${percentage}%</td>
      <td class="cell-4 s-correct">
        ${solution.correct}/${questionCount} correct answers
      </td>
    </tr>
  `;
};

const quizTemplate = (quiz, solutions, onDeleteQuiz) => {
  const filteredQuizzes = solutions.filter(
    (solution) => solution.quiz.objectId === quiz.objectId
  );
  const timesTakenQuiz = filteredQuizzes.length;

  return html`
    <article class="preview layout">
      <div class="right-col">
        <a class="action cta" href="/details/${quiz.objectId}">View Quiz</a>
        <a class="action cta" href="/edit/${quiz.objectId}"
          ><i class="fas fa-edit"></i
        ></a>
        <a
          class="action cta"
          href="javascript:void(0)"
          @click=${onDeleteQuiz}
          data-id="${quiz.objectId}"
          ><i class="fas fa-trash-alt"></i
        ></a>
      </div>
      <div class="left-col">
        <h3>
          <a class="quiz-title-link" href="/details/${quiz.objectId}"
            >${quiz.title}</a
          >
        </h3>
        <span class="quiz-topic">Topic: ${quiz.topic}</span>
        <div class="quiz-meta">
          <span>${quiz.questionCount} questions</span>
          <span>|</span>
          <span>Taken ${timesTakenQuiz} times</span>
        </div>
      </div>
    </article>
  `;
};

export async function showProfile(ctx) {
  const userData = getUserData();

  const solutionsResults = await getSolutionsByUserId(userData.objectId);
  const solutions = solutionsResults.results;

  const ownerQuizzesResulsts = await getQuizzesByOwnerId(userData.objectId);
  const ownerQuizzes = ownerQuizzesResulsts.results;

  render(profileTemplate(userData, ownerQuizzes, solutions, onDeleteQuiz));
  renderResolvedQuizzes(solutions);
}

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

async function renderResolvedQuizzes(solutions) {
  const root = document.querySelector("tbody");
  const results = [];

  for (const solution of solutions) {
    const quiz = await getQuizById(solution.quiz.objectId);
    const percentage = (solution.correct / quiz.questionCount) * 100;

    const date = new Date(solution.createdAt);
    const formatDate = `${date.getDay()}.${
      months[date.getMonth() + 1]
    } ${date.getFullYear()}`;

    results.push(
      resolvedQuizTemplate(
        quiz,
        solution,
        formatDate,
        percentage,
        quiz.questionCount
      )
    );
  }

  renderTemplate(results, root);
}

async function onDeleteQuiz(e) {
  const choice = confirm("Are you sure?");
  let quizId = null;

  if (e.target.tagName == "A") {
    quizId = e.target.dataset.id;
  } else {
    quizId = e.target.parentElement.dataset.id;
  }

  if (choice) {
    const quizQuestions = await getQuizQuestions(quizId);

    if (quizQuestions.results.length > 0) {
      for (const question of quizQuestions.results) {
        await deleteQuestion(question.objectId);
      }
    }

    await deleteQuiz(quizId);
    showProfile();
  }
}
