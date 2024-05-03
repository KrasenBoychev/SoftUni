import { getUniqueTopics, getQuizzesByOwnerIdOrdered} from "../data/quizzes.js";
import { render, renderTemplate } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";
import * as templates from "./edit/templates.js";
import * as editFunctions from "./edit/edit.js";
import { createQuiz} from "../data/quizzes.js";

export async function showCreate(ctx) {
  const uniqueTopics = await getUniqueTopics();
  render(
    templates.editTemplate(
      uniqueTopics.results,
      createSubmitHandler(editFunctions.onSaveTitleTopic),
      editFunctions.createNewTopic
    )
  );

  renderAddQuestion();
}

async function recordQuiz(quizTitle, quizTopic) {
  const userData = getUserData();
  if (!userData) {
    page.redirect("/login");
  }

  const pointer = {
    __type: "Pointer",
    className: "_User",
    objectId: userData.objectId,
  };

  await createQuiz({
    title: quizTitle,
    topic: quizTopic,
    questionCount: 0,
    ownerId: pointer,
  });

  addQuestionBtn(false);
  
  const quizzes = await getQuizzesByOwnerIdOrdered(userData.objectId);
  const quizzesByUserId = quizzes.results;
  const lastQuiz = quizzesByUserId[quizzesByUserId.length - 1];

  return lastQuiz.objectId;
}

function renderAddQuestion() {
  const divQuestion = document.getElementById("print-questions");
  renderTemplate(
    templates.renderQuestions(editFunctions.onAddQuestion),
    divQuestion
  );

  addQuestionBtn(true);
}

function addQuestionBtn(boolean) {
  const divQuestion = document.getElementById("add-question-btn");
  divQuestion.disabled = boolean;
}

export { recordQuiz };
