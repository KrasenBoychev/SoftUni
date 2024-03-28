import { createQuiz } from "../data/quzzes.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

let countQuestions = 1;
let quizName = null;
let quizTopic = null;
let userId = null;

const createTemplate = (onCreate, templateToRender, countQuestions) => html`
          <section id="create">
                <form class="pad-med centered" @submit=${onCreate}>
                   ${templateToRender(countQuestions)}
                   <input class="block action cta" type="submit" value="Next"/>
                </form>
                <input class="block action cta hidden" type="submit" value="Finish" @click=${onFinish}/>
            </section>
`;

const quizTemplate = () => html`
  <label class="block centered">Quiz Name: <input class="auth-input input" type="text" name="quizName" /></label>
  <label class="block centered">Quiz Topic: <input class="auth-input input" type="text" name="quizTopic" /></label>
`;

const questionTemplate = (countQuestions) => html`
  <label class="block centered">${countQuestions}. Question Name: <input class="auth-input input" type="text" name="questionName${countQuestions}" /></label>
`;

export function showCreate(ctx) {
  const id = ctx.params.id;
  userId = id;

  render(createTemplate(createSubmitHandler(onCreate), quizTemplate));
}

function onCreate(data, form) {
  const result = Object.values(data);
  
  for (const input of result) {
    if (input.length == 0) {
      return alert('All fields are required!');
    }
  }

  if (countQuestions == 1) {
    quizName = data.quizName;
    quizTopic = data.quizTopic;
  }
      
  const finishBtn = document.getElementById('create').querySelector('input[value="Finish"]');
  finishBtn.classList.remove('hidden');

  form.reset();
  render(createTemplate(createSubmitHandler(onCreate), questionTemplate, countQuestions));

  countQuestions++;
}

function onFinish(e) {
  const form = e.target.parentElement;
  const questionContent = form.querySelector('input').value;

  if (questionContent.length == 0) {
    return alert('All fields are required!');
  }

  createQuiz({title: quizName, topic: quizTopic, questionCount: countQuestions - 1});

  countQuestions = 1;

  page.redirect('/browse');
}

async function recordQuestion(data, id) {
  
}
