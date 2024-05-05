import { deleteQuestion, getQuizQuestions } from "../data/questions.js";
import { deleteQuiz } from "../data/quizzes.js";
import { html, render, renderTemplate } from "../lib.js";

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
  const userData = ctx.userData;
  const solutions = ctx.solutions.results;
  const ownerQuizzes = ctx.quizzes.results;

  render(profileTemplate(userData, ownerQuizzes, solutions, onDeleteQuiz));
  renderResolvedQuizzes(ctx.results);
}

async function renderResolvedQuizzes(results) {
  const root = document.querySelector("tbody");
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
