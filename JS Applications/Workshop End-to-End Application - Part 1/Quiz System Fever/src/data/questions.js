import { get, post, put, del } from "./request.js";

const endpoints = {
    questions: '/classes/Questions',
    quizQuestions: (quizId) => `/classes/Questions?where={"quiz":{"__type":"Pointer","className":"Quizzes","objectId":"${quizId}"}}`
}

export async function createQuestions(data) {
    await post(endpoints.questions, data);
}

export async function getQuizQuestions(quizId) {
    return await get(endpoints.quizQuestions(quizId));
}