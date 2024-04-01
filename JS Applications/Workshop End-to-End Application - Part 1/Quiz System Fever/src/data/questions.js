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

export async function deleteQuestion(id) {
    await del(endpoints.questions + "/" + id);
}

export async function getQuestionById(id) {
    return await get(endpoints.questions + "/" + id);
}