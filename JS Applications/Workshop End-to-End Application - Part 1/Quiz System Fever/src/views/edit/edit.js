import {
  createQuestion,
  deleteQuestion,
  getQuestionById,
  getQuestionsByQuizIdOrdered,
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
      quiz.objectId
    )
  );
  renderHeading(quiz.title, quiz.topic);
  renderArticles(questions);
}

function renderHeading(title, topic) {
  const header = document.getElementById("edit-heading");
  renderTemplate(templates.headingTemplate(title, topic), header);
}

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
    document.getElementById("print-questions").dataset.id = lastQuizId;
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

function createNewTopic() {
  if (document.getElementById("categories").value == "new-topic") {
    document.getElementById("newTopic").style.display = "block";
  } else {
    document.getElementById("newTopic").style.display = "none";
  }
}

async function onAddQuestion() {
  const divQuestions = document.getElementById("questions-box");

  let lastIndex = null;
  if (divQuestions.childElementCount > 0) {
    const article = divQuestions.lastElementChild;
    const questionId = article.firstElementChild.dataset.id;

    if (!questionId) {
      return alert("Last question hasn't been finished yet!");
    }

    lastIndex = article.firstElementChild.firstElementChild.dataset.id;
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

async function onAddAnswer(e) {
  e.preventDefault();

  let formElement = getFormElement(e);
  let divAnswers = formElement.children[1];

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
  renderTemplate(
    templates.answerContentTemplate(index, onDeleteAnswer),
    divEditor
  );
}

async function onSaveQuestion(e) {
  e.preventDefault();
  const form = getFormElement(e);

  const textarea = form.querySelector("textarea").value;
  if (!textarea) {
    return alert("All fields are required!");
  }

  let answersArray = [];
  const inputsText = form.querySelectorAll('input[type="text"]');
  for (const input of inputsText) {
    if (!input.value) {
      answersArray = [];
      return alert("All fields are required!");
    } else {
      answersArray.push(input.value);
    }
  }

  let correctAnswers = [];
  const inputsCheckbox = form.querySelectorAll('input[type="checkbox"]');
  for (let i = 0; i < inputsCheckbox.length; i++) {
    if (inputsCheckbox[i].checked) {
      correctAnswers.push(i);
    }
  }

  if (correctAnswers.length == 0) {
    return alert("Tick the correct answer(s)!");
  }

  const quizId = form.parentElement.parentElement.parentElement.dataset.id;

  const pointer = {
    __type: "Pointer",
    className: "Quizzes",
    objectId: quizId,
  };
  const data = {
    text: textarea,
    answers: answersArray,
    correctIndex: correctAnswers,
    quiz: pointer,
  };

  let questionId = null;
  if (form.parentElement.firstElementChild.dataset.id) {
    questionId = form.parentElement.firstElementChild.dataset.id;
    await updateQuestion(questionId, data);
  } else {
    await createQuestion(data);
    const questionsByQuizId = await getQuestionsByQuizIdOrdered(quizId);
    questionId =
      questionsByQuizId.results[questionsByQuizId.results.length - 1].objectId;

    const quiz = await getQuizById(quizId);
    const questionsNum = quiz.questionCount + 1;

    const dataQuiz = {
      title: quiz.title,
      topic: quiz.topic,
      questionCount: questionsNum,
    };

    sendUpdateQuizRequest(dataQuiz, quizId);
  }

  const index =
    form.parentElement.firstElementChild.firstElementChild.dataset.id;
  const questionUpdated = await getQuestionById(questionId);
  const article = form.parentElement;

  renderTemplate(
    templates.articleTemplate(
      questionUpdated,
      index,
      onEditQuestion,
      onDeleteQuestion
    ),
    article
  );
}

async function onEditQuestion(e) {
  const { questionId, index, root } = getQuestionDetails(e);
  const question = await getQuestionById(questionId);

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
    const form = getFormElement(e);
    const article = form.parentElement;
    const questionId = article.firstElementChild.dataset.id;

    const divOverlay = document.createElement("div");
    divOverlay.classList.add("loading-overlay", "working");
    article.appendChild(divOverlay);

    await deleteQuestion(questionId);

    const quizId = form.parentElement.parentElement.parentElement.dataset.id;
    const quiz = await getQuizById(quizId);
    const questionsNum = quiz.questionCount - 1;

    const data = {
      title: quiz.title,
      topic: quiz.topic,
      questionCount: questionsNum,
    };

    sendUpdateQuizRequest(data, quizId);
  }
}

async function onCancelChanges(e) {
  const { questionId, index, root } = getQuestionDetails(e);

  if (questionId) {
    const question = await getQuestionById(questionId);
    renderTemplate(templates.articleTemplate(question, index), root);
  } else {
    const divQuestions = root.parentElement;
    divQuestions.removeChild(root);
  }
}

async function onDeleteAnswer(e) {
  e.preventDefault();

  let divEditorInput = null;
  if (e.target.tagName == 'BUTTON') {
    divEditorInput = e.target.parentElement;
  } else {
    divEditorInput = e.target.parentElement.parentElement;
  }
  
  const divAnswers = divEditorInput.parentElement;
  divAnswers.removeChild(divEditorInput);
}

function getQuestionDetails(e) {
  let questionId = null;
  let index = null;
  let root = null;

  if (e.target.tagName == "BUTTON") {
    questionId = e.target.parentElement.parentElement.dataset.id;
    index = e.target.parentElement.dataset.id;
    root = e.target.parentElement.parentElement.parentElement;
  } else {
    questionId = e.target.parentElement.parentElement.parentElement.dataset.id;
    index = e.target.parentElement.parentElement.dataset.id;
    root = e.target.parentElement.parentElement.parentElement.parentElement;
  }

  return { questionId, index, root };
}

function getFormElement(e) {
  let formElement = null;

  if (e.target.tagName == "BUTTON") {
    formElement =
      e.target.parentElement.parentElement.parentElement.querySelector("form");
  } else {
    formElement =
      e.target.parentElement.parentElement.parentElement.parentElement.querySelector(
        "form"
      );
  }

  return formElement;
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

export { onSaveTitleTopic, createNewTopic, onAddQuestion };