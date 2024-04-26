import {
  deleteQuestion,
  getQuestionById,
  getQuizQuestions,
  updateQuestion,
} from "../data/questions.js";
import { getQuizById, getUniqueTopics, updateQuiz } from "../data/quzzes.js";
import { render, renderTemplate } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";
import * as templates from "./edit/templates.js";
import * as editFunctions from "./edit/edit.js";

import { createQuestions } from "../data/questions.js";
import { createQuiz, getLatestQuiz, getQuizzesCount } from "../data/quzzes.js";

export async function showCreate(ctx) {
  const uniqueTopics = await getUniqueTopics();
  render(
    templates.editTemplate(
      uniqueTopics.results,
      createSubmitHandler(editFunctions.onSaveTitleTopic)
    )
  );
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
}

export { recordQuiz };
