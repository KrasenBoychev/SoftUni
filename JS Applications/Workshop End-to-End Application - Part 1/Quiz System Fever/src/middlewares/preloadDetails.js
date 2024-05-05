import { getQuizById } from "../data/quizzes.js";
import { getSolutionsByQuizId } from "../data/solutions.js";
import { getUserName } from "../data/users.js";
import { getUserData } from "../util.js";

export function preloadDetails() {
  return async function (ctx, next) {
    const quizId = ctx.params.id;
    ctx.quiz = await getQuizById(quizId);

    const ownerId = ctx.quiz.ownerId.objectId;
    ctx.owner = await getUserName(ownerId);

    ctx.solutions = await getSolutionsByQuizId(quizId);
    ctx.userData = await getUserData();

    next();
  };
}