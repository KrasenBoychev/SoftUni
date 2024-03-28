import { get, post, put, del } from "./request.js";

const endpoints = {
    allQuizes: '/classes/Quizzes',
    latestQuiz: '',
    quizzesCount: ''
}

export async function getLatestQuiz() {
    //TODO
    //Adjust Home Template
}

export async function getQuizzesCount() {
    //TODO
    //Adjust Home Template
}

export async function createQuiz(data) {
    await post(endpoints.allQuizes, data);
}