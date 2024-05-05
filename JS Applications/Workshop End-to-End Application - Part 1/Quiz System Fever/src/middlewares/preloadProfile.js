import { getQuizById, getQuizzesByOwnerId } from "../data/quizzes.js";
import { getSolutionsByUserId } from "../data/solutions.js";
import { getUserData } from "../util.js";
import { html } from "../lib.js";

export function preload() {
    return async function (ctx, next) {
        ctx.userData = getUserData();
        ctx.solutions = await getSolutionsByUserId(ctx.userData.objectId);
        ctx.quizzes = await getQuizzesByOwnerId(ctx.userData.objectId);
        ctx.results = await renderResolvedQuizzes(ctx.solutions.results);
        next();
    };
};

const resolvedQuizTemplate = (
  quiz,
  solution,
  formatDate,
  percentage,
  questionCount
) => {
  return html`
    <tr class="results-row">
      <td class="cell-1">${formatDate}</td>
      <td class="cell-2">
        <a href="/details/${quiz.objectId}">${quiz.title}</a>
      </td>
      <td class="cell-3 s-correct">${percentage}%</td>
      <td class="cell-4 s-correct">
        ${solution.correct}/${questionCount} correct answers
      </td>
    </tr>
  `;
};

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

async function renderResolvedQuizzes(solutions) {
    const results = [];
  
    for (const solution of solutions) {
      const quiz = await getQuizById(solution.quiz.objectId);
      const percentage = (solution.correct / quiz.questionCount) * 100;
  
      const date = new Date(solution.createdAt);
      const formatDate = `${date.getDate()}.${months[date.getMonth() + 1]} ${date.getFullYear()}`;
  
      results.push(
        resolvedQuizTemplate(
          quiz,
          solution,
          formatDate,
          percentage,
          quiz.questionCount
        )
      );
    }
    
    return results;
  }

  

  