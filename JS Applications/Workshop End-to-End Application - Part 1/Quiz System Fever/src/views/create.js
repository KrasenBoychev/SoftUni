import { createQuestions } from "../data/questions.js";
import { createQuiz, getLatestQuiz, getQuizzesCount } from "../data/quzzes.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";

let countQuestions = 1;
const questions = {};

let quizTitle = null;
let quizTopic = null;

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
  <label class="block centered">Quiz Title: <input class="auth-input input" type="text" name="quizTitle" /></label>
  <label class="block centered">Quiz Topic: <input class="auth-input input" type="text" name="quizTopic" /></label>
`;

const questionTemplate = (countQuestions) => html`
  <label class="block centered">${countQuestions}. Question Name: <input class="auth-input input" type="text" name="questionName" /></label>
  <label class="block centered">Option 1: <input class="auth-input input" type="text" name="optionOne" /></label>
  <label class="block centered">Option 2: <input class="auth-input input" type="text" name="optionTwo" /></label>
  <label class="block centered">Option 3: <input class="auth-input input" type="text" name="optionThree" /></label>
  <label class="block centered">Correct Option: <input class="auth-input input" type="number" name="correctAnswer" /></label>
`;

export function showCreate(ctx) {
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
    quizTitle = data.quizTitle;
    quizTopic = data.quizTopic;

  } else {
   
    if (Number(data.correctAnswer) < 0 || Number(data.correctAnswer) > 3) {
      return alert('Correct option must be one of the following numbers: 1 or 2 or 3');
    }

    questions[data.questionName] = { answers: [data.optionOne, data.optionTwo, data.optionThree], correctAnswer: data.correctAnswer};
  }

  const finishBtn = document.getElementById('create').querySelector('input[value="Finish"]');
  finishBtn.classList.remove('hidden');

  form.reset();
  render(createTemplate(createSubmitHandler(onCreate), questionTemplate, countQuestions));

  countQuestions++;
}

function onFinish(e) {
  const form = e.target.parentElement;
  const questionContent = form.querySelectorAll('input');

  for (let i = 0; i <= 4; i++) {
    if (questionContent[i].value.length == 0) {
      return alert('All fields are required!');
    }
  }

  if (Number(questionContent[4].value) < 0 || Number(questionContent[4].value) > 3) {
    return alert('Correct option must be one of the following numbers: 1 or 2 or 3');
  }

  questions[questionContent[0].value] = { answers: [questionContent[1].value, questionContent[2].value, questionContent[3].value], correctAnswer: questionContent[4].value};

  recordQuiz();
  recordQuestions();

  countQuestions = 1;

  page.redirect('/browse');
}

async function recordQuiz() {
  const userData = getUserData();

  if (!userData) {
    page.redirect('/login');
  }

  const pointer = { __type: "Pointer", className: "_User", objectId: userData.objectId };

  createQuiz({ title: quizTitle, topic: quizTopic, questionCount: countQuestions - 1, ownerId: pointer });
}


async function recordQuestions() {
  const quizzesCount = await getQuizzesCount();
  const latestQuizRequest = await getLatestQuiz(quizzesCount.count - 1);
  const latestQuizId = latestQuizRequest.results[0].objectId;

  const pointer = { __type: "Pointer", className: "Quizzes", objectId: latestQuizId };

  for (const [question, options] of Object.entries(questions)) {
    createQuestions({ text: question, answers: options.answers, correctIndex: Number(options.correctAnswer), quiz: pointer });
  }
}
