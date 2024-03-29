import { get, post, put, del } from "./request.js";

const endpoints = {
    questions: '/classes/Questions'
}

export async function createQuestions(data) {
    await post(endpoints.questions, data);
}