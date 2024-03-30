import { render, page } from "../lib.js";
import { loading } from "../app.js";

export function loadQuiz(ctx) {
    const quizId = ctx.params.id;
    render(loading());
    page.redirect(`/quiz/${quizId}/1`);
}