import {
  deleteQuestion,
  getQuestionById,
  getQuizQuestions,
  updateQuestion,
} from "../../data/questions.js";
import {
  getQuizById,
  getUniqueTopics,
  updateQuiz,
} from "../../data/quizzes.js";
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

  render(
    templates.editTemplate(
      uniqueTopics.results,
      createSubmitHandler(onSaveTitleTopic),
      createNewTopic,
      quiz
    )
  );
  renderHeading(quiz.title, quiz.topic);
  renderArticles(questions);
}

// Works perfectly
function renderHeading(title, topic) {
  const header = document.getElementById("edit-heading");
  renderTemplate(templates.headingTemplate(title, topic), header);
}

// Works perfectly
function renderArticles(questions) {
  const divQuestion = document.getElementById("print-questions");
  renderTemplate(
    templates.renderQuestions(
      onAddQuestion,
      questions,
      templates.editDeleteTemplate
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
async function onSaveTitleTopic(data, form) {
  if (!data.title) {
    return alert("Title is required!");
  }

  if (data.topic == "all") {
    return alert("Topic is required!");
  }

  if (data.topic == "new-topic" && !data["new-topic"]) {
    return alert("New topic is required!");
  }

  let topic = null;
  if (data["new-topic"] && data.topic == "new-topic") {
    topic = data["new-topic"];
  } else {
    topic = data.topic;
  }

  const quizId = form.dataset.id;

  if (quizId == "") {
    const lastQuizId = await createFunctions.recordQuiz(data.title, topic);
    form.dataset.id = lastQuizId;
  } else {
    const quiz = await getQuizById(quizId);

    const dataObj = {
      title: data.title,
      topic: topic,
      questionCount: quiz.questionCount,
    };

    sendUpdateQuizRequest(dataObj, quizId);
  }

  renderHeading(data.title, topic);
  document.getElementById("newTopic").style.display = "none";
  form.reset();
}

// Works perfectly
function createNewTopic() {
  if (document.getElementById("categories").value == "new-topic") {
    document.getElementById("newTopic").style.display = "block";
  } else {
    document.getElementById("newTopic").style.display = "none";
  }
}

// Works perfectly
async function onAddQuestion() {
  const divQuestions = document.getElementById("questions-box");

  let lastIndex = null;
  if (divQuestions.childElementCount > 0) {
    lastIndex =
      divQuestions.lastElementChild.firstElementChild.firstElementChild.dataset
        .id;
  } else {
    lastIndex = 0;
  }

  const index = Number(lastIndex) + 1;

  const article = document.createElement("article");
  article.className = "editor-question";
  divQuestions.appendChild(article);
  renderTemplate(
    templates.saveCancelTemplate(
      index,
      onSaveQuestion,
      onCancelChanges,
      onDeleteAnswer,
      onAddAnswer
    ),
    article
  );
}

// Works perfectly
async function onAddAnswer(e) {
  e.preventDefault();
  const divAnswers = document.getElementById("answers-box");

  let index = null;
  if (divAnswers.childElementCount > 0) {
    index = Number(divAnswers.lastElementChild.dataset.id) + 1;
  } else {
    index = 0;
  }

  const divEditor = document.createElement("div");
  divEditor.className = "editor-input";
  divEditor.dataset.id = index;

  divAnswers.appendChild(divEditor);
  renderTemplate(templates.answerContentTemplate(index, onDeleteAnswer), divEditor);
}

async function onEditQuestion(e) {
  const questionId = getDatasetQuestionId(e);
  const index = getDatasetIndex(e);

  const question = await getQuestionById(questionId);
  const root = e.target.parentElement.parentElement.parentElement;
  renderTemplate(
    templates.saveCancelTemplate(
      index,
      onSaveQuestion,
      onCancelChanges,
      onDeleteAnswer,
      onAddAnswer,
      question
    ),
    root
  );
}

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

async function sendUpdateQuizRequest(data, quizId) {
  const userData = getUserData();
  const pointer = {
    __type: "Pointer",
    className: "_User",
    objectId: userData.objectId,
  };

  data.ownerId = pointer;
  await updateQuiz(quizId, data);
}

function addQuestionBtn(boolean) {
  const divQuestion = document.getElementById("add-question-btn");
  divQuestion.disabled = boolean;
}

export { onSaveTitleTopic, createNewTopic, onAddQuestion, addQuestionBtn };
