import {
  deleteQuestion,
  getQuestionById,
  getQuizQuestions,
  updateQuestion,
} from "../../data/questions.js";
import { getQuizById, getUniqueTopics, updateQuiz } from "../../data/quzzes.js";
import { render, renderTemplate } from "../../lib.js";
import { createSubmitHandler, getUserData } from "../../util.js";
import * as templates from "./templates.js";
import * as createFunctions from "../create.js";

// Works perfectly
export async function showEdit(ctx) {
  const currentQuizId = ctx.params.id;
  const quiz = await getQuizById(currentQuizId);
  const uniqueTopics = await getUniqueTopics();
  const questionsResults = await getQuizQuestions(currentQuizId);
  const questions = questionsResults.results;

  render(templates.editTemplate(uniqueTopics.results, createSubmitHandler(onSaveTitleTopic), quiz));
  renderHeading(quiz.title, quiz.topic);
  renderArticles(questions);
}

function renderHeading(title, topic) {
  const header = document.getElementById('edit-heading');
  renderTemplate(templates.headingTemplate(title, topic), header);
}

// Works perfectly
function renderArticles(questions) {
  const divQuestion = document.getElementById("print-questions");
  renderTemplate(
    templates.renderQuestions(
      questions,
      templates.editDeleteTemplate,
      onAddQuestion
    ),
    divQuestion
  );

  const articles = divQuestion.querySelectorAll("article");
  for (let i = 0; i < articles.length - 1; i++) {
    renderTemplate(
      templates.articleTemplate(
        questions[i],
        i + 1,
        onEditQuestion,
        onDeleteQuestion
      ),
      articles[i]
    );
  }
}

// Works perfectly
async function onSaveTitleTopic({ title, topic }, form) {
  if (!title || topic == "all") {
    return alert("Title and Topic fields are required!");
  }

  const quizId = form.dataset.id;

  if (quizId == "") {
    createFunctions.recordQuiz(title, topic);

  } else {
    const quiz = await getQuizById(quizId);

    const data = {
      title: title,
      topic: topic,
      questionCount: quiz.questionCount,
    };

    sendUpdateQuizRequest(data);
  }
 
  renderHeading(title, topic);
  form.reset();
}

// Works perfectly
async function onEditQuestion(e) {
  const questionId = getDatasetQuestionId(e);
  const index = getDatasetIndex(e);

  const question = await getQuestionById(questionId);
  const root = e.target.parentElement.parentElement.parentElement;
  renderTemplate(
    templates.saveCancelTemplate(
      question,
      index,
      onSaveQuestion,
      onCancelChanges,
      onDeleteAnswer,
      onAddAnswer
    ),
    root
  );
}

// Works perfectly
async function onDeleteQuestion(e) {
  const choice = confirm("Are you sure?");

  if (choice) {
    const questionId = getDatasetQuestionId(e);

    const article = e.target.parentElement.parentElement.parentElement;
    const divOverlay = document.createElement("div");
    divOverlay.classList.add("loading-overlay", "working");
    article.appendChild(divOverlay);

    await deleteQuestion(questionId);

    const quiz = await getQuizById(quizId);
    quiz.questionCount -= 1;

    const data = {
      title: quiz.title,
      topic: quiz.topic,
      questionCount: quiz.questionCount,
    };

    sendUpdateQuizRequest(data);
  }
}

async function onAddQuestion(e) {
  if (e.target.tagName == "BUTTON") {
    const divQuestions = document.getElementById("questions-box");
    const lastIndex = divQuestions.lastElementChild.querySelector("button").dataset.id;
    const index = Number(lastIndex) + 1;

    const article = document.createElement("article");
    article.className = "editor-question";

    divQuestions.appendChild(article);
    renderTemplate(testTemplate(index), article);
  }
}

async function onSaveQuestion(e) {
  if (e.target.tagName == "BUTTON") {
    const article = e.target.parentElement.parentElement.parentElement;
    const form = article.querySelector("form");

    const textarea = form.querySelector("textarea").value;
    if (!textarea) {
      return alert("All fields are required!");
    }

    let answersArray = [];

    const inputs = form.querySelectorAll('input[type="text"]');
    for (const input of inputs) {
      if (!input.value) {
        answersArray = [];
        return alert("All fields are required!");
      } else {
        answersArray.push(input.value);
      }
    }

    if (e.target.parentElement.dataset.id) {
      const questionId = e.target.parentElement.dataset.id;
      const question = await getQuestionById(questionId);

      const pointer = {
        __type: "Pointer",
        className: "Quizzes",
        objectId: quizId,
      };
      const data = {
        text: textarea,
        answers: answersArray,
        correctIndex: question.correctIndex,
        quiz: pointer,
      };

      await updateQuestion(questionId, data);

      const index = e.target.dataset.id;
      const questionUpdated = await getQuestionById(questionId);

      renderTemplate(articleTemplate(questionUpdated, index), article);
    } else {
      const pointer = {
        __type: "Pointer",
        className: "Quizzes",
        objectId: quizId,
      };
      const data = {
        text: textarea,
        answers: answersArray,
        correctIndex: "", //TODO
        quiz: pointer,
      };

      //TODO
    }
  }
}

async function onCancelChanges(e) {
  if (e.target.tagName == "BUTTON") {
    const questionId = e.target.parentElement.dataset.id;
    const question = await getQuestionById(questionId);
    const index = e.target.dataset.id;

    const root = e.target.parentElement.parentElement.parentElement;
    renderTemplate(articleTemplate(question, index), root);
  }
}

async function onDeleteAnswer(e) {
  e.preventDefault();
  if (e.target.tagName == "BUTTON") {
    const divEditor = e.target.parentElement;

    if (!divEditor.dataset.id) {
      const divAnswers = e.target.parentElement.parentElement;
      divAnswers.removeChild(divEditor);
      return;
    }
    const form = e.target.parentElement.parentElement.parentElement;
    const questionId = form.dataset.id;
    const question = await getQuestionById(questionId);
    const answers = question.answers;

    const questionIndex = Number(e.target.dataset.id);
    answers.splice(questionIndex, 1);

    const pointer = {
      __type: "Pointer",
      className: "Quizzes",
      objectId: quizId,
    };
    const data = {
      text: question.text,
      answers: answers,
      correctIndex: question.correctIndex,
      quiz: pointer,
    };

    await updateQuestion(questionId, data);

    const index = form.querySelector("textarea").dataset.id;
    const questionUpdated = await getQuestionById(questionId);
    const article = form.parentElement;

    renderTemplate(saveCancelTemplate(questionUpdated, index), article);
  }
}

async function onAddAnswer(e) {
  e.preventDefault();
  if (e.target.tagName == "BUTTON") {
    const divAnswers = document.getElementById("answers-box");

    if (!divAnswers.lastElementChild.dataset.id) {
      return;
    }

    let index = Number(divAnswers.lastElementChild.dataset.id) + 1;

    const divEditor = document.createElement("div");
    divEditor.className = "editor-input";
    divEditor.innerHTML = `
            <label class="radio">
                <input class="input" type="radio" name="question-${index}" value="${index}" />
                <i class="fas fa-check-circle"></i>
            </label>
            <input class="input" type="text" name="answer-${index}" />
            <button class="input submit action" data-id="${index}"><i class="fas fa-trash-alt"></i></button>
        `;

    divAnswers.appendChild(divEditor);
    divAnswers.lastElementChild
      .querySelector("button")
      .addEventListener("click", onDeleteAnswer);
  }
}

function getDatasetQuestionId(e) {
  let questionId = null;
  if (e.target.tagName == "BUTTON") {
    questionId = e.target.parentElement.parentElement.dataset.id;
  } else {
    questionId = e.target.parentElement.parentElement.parentElement.dataset.id;
  }
  return questionId;
}

function getDatasetIndex(e) {
  let index = null;
  if (e.target.tagName == "BUTTON") {
    index = e.target.parentElement.dataset.id;
  } else {
    index = e.target.parentElement.parentElement.dataset.id;
  }
  return index;
}

async function sendUpdateQuizRequest(data) {
  const userData = getUserData();
  const pointer = {
    __type: "Pointer",
    className: "_User",
    objectId: userData.objectId,
  };

  data.ownerId = pointer;
  await updateQuiz(quizId, data);
}

export {
  onSaveTitleTopic
}