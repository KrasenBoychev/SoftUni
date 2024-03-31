import { loading } from "../app.js";
import { getAllQuizzes, getQuizzesfilteredByTitle, getQuizzesfilteredByTopic, getQuizzesfilteredByTopicAndTitle, getUniqueTopics } from "../data/quzzes.js";
import { html, render, renderTemplate } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const catalogTemplate = (uniqueTopics, onFilter) => html`
    <section id="browse">
          <header class="pad-large">
              <form class="browse-filter" @submit=${onFilter}>
                  <input class="input" type="text" name="query">
                  <select class="input" name="topic">
                      <option value="all">All Categories</option>
                      ${uniqueTopics.map((topic) => option(topic))}
                  </select>
                  <input class="input submit action" type="submit" value="Filter Quizes">
              </form>
              <h1>All quizes</h1>
          </header>

          <div class="pad-large alt-page">
          </div>
      </section>
`;

function filterQuizzes(quizzes) {
    return quizzes.map((quiz) => quizTemplate(quiz));
}

const quizTemplate = (quiz) => html`
    <article class="preview layout">
          <div class="right-col">
              <a class="action cta" href="/details/${quiz.objectId}">View Quiz</a>
          </div>
          <div class="left-col">
              <h3><a class="quiz-title-link" href="/details/${quiz.objectId}">${quiz.title}</a></h3>
              <span class="quiz-topic">Topic: ${quiz.topic}</span>
              <div class="quiz-meta">
                  <span>${quiz.questionCount} questions</span>
                  <span>|</span>
                  <span>Taken ?189? times</span>
              </div>
          </div>
      </article>
`;

const option = (topic) => html`
    <option value="${topic}">${topic}</option>
`;

export async function showCatalog(ctx) {
    render(loading());

    const quizzes = await getAllQuizzes();
    const uniqueTopics = await getUniqueTopics();

    render(catalogTemplate(uniqueTopics.results, createSubmitHandler(onFilter)));

    const rootFilteredQuizzes = document.getElementById('browse').querySelector('div');
    renderTemplate(filterQuizzes(quizzes.results), rootFilteredQuizzes);
}

async function onFilter(data) {
    const rootFilteredQuizzes = document.getElementById('browse').querySelector('div');

    if (data.query.length == 0 && data.topic == 'all') {
        showCatalog();

    } else if (data.query.length == 0) {
       // renderTemplate(loading(), rootFilteredQuizzes);
        const quizzes = await getQuizzesfilteredByTopic(data.topic);
        renderTemplate(filterQuizzes(quizzes.results), rootFilteredQuizzes);

    } else if (data.topic == 'all') {
        const quizzes = await getQuizzesfilteredByTitle(data.query);
        renderTemplate(filterQuizzes(quizzes.results), rootFilteredQuizzes);

    } else {
        const quizzes = await getQuizzesfilteredByTopicAndTitle(data.query, data.topic);
        renderTemplate(filterQuizzes(quizzes.results), rootFilteredQuizzes);
    }
}