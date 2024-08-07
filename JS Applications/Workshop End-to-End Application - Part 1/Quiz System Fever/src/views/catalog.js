import {
  getAllQuizzes,
  getUniqueTopics,
  getQuizzesfilteredByTitle,
  getQuizzesfilteredByTopic,
  getQuizzesfilteredByTopicAndTitle,
} from "../data/quizzes.js";
import { html, render, renderTemplate } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { getAllSolutions } from "../data/solutions.js";

const catalogTemplate = (uniqueTopics, onFilter) => html`
  <section id="browse">
    <header class="pad-large">
      <form class="browse-filter" @submit=${onFilter}>
        <input class="input" type="text" name="query" />
        <select class="input" name="topic">
          <option value="all">All Categories</option>
          ${uniqueTopics.map((topic) => option(topic))}
        </select>
        <input
          class="input submit action"
          type="submit"
          value="Filter Quizes"
        />
      </form>
      <h1>All quizzes</h1>
    </header>

    <div class="pad-large alt-page"></div>
  </section>
`;

const quizTemplate = (quiz, solutions) => {
  const filteredQuizzes = solutions.filter(
    (solution) => solution.quiz.objectId === quiz.objectId
  );
  const timesTakenQuiz = filteredQuizzes.length;

  return html` <article class="preview layout">
    <div class="right-col">
      <a class="action cta" href="/details/${quiz.objectId}">View Quiz</a>
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
  </article>`;
};

export const option = (topic) => html`
  <option value="${topic}">${topic}</option>
`;

const noQuizzesTemplate = () => html` <p>No quizzes found!</p> `;

export async function showCatalog(ctx) {
  const quizzes = await getAllQuizzes();
  const uniqueTopics = await getUniqueTopics();
  const solutionsResults = await getAllSolutions();
  const solutions = solutionsResults.results;

  render(catalogTemplate(uniqueTopics.results, createSubmitHandler(onFilter)));
  renderTemplate(filterQuizzes(quizzes.results, solutions), getRoot());
}

async function onFilter(data) {
  if (data.query.length == 0 && data.topic == "all") {
    showCatalog();
  } else if (data.query.length == 0) {
    const quizzes = await getQuizzesfilteredByTopic(data.topic);
    renderContent(quizzes.results, getRoot());
  } else if (data.topic == "all") {
    const quizzes = await getQuizzesfilteredByTitle(data.query);
    renderContent(quizzes.results, getRoot());
  } else {
    const quizzes = await getQuizzesfilteredByTopicAndTitle(
      data.query,
      data.topic
    );
    renderContent(quizzes.results, getRoot());
  }
}

function filterQuizzes(quizzes, solutions) {
  return quizzes.map((quiz) => quizTemplate(quiz, solutions));
}

function getRoot() {
  const rootFilteredQuizzes = document
    .getElementById("browse")
    .querySelector("div");

  return rootFilteredQuizzes;
}

async function renderContent(quizzes, root) {
  const solutionsResults = await getAllSolutions();
  const solutions = solutionsResults.results;

  if (quizzes.length == 0) {
    renderTemplate(noQuizzesTemplate(), root);
  } else {
    renderTemplate(filterQuizzes(quizzes, solutions), root);
  }
}
