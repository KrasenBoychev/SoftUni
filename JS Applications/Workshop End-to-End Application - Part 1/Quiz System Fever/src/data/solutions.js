import { get, post, put, del } from "./request.js";

const endpoints = {
    solutions: '/classes/Solutions',
    solutionsByUserId: (userId) => `/classes/Solutions?where={"userId":{"__type":"Pointer","className":"_User","objectId":"${userId}"}}`,
    solutionsByQuizId: (quizId) => `/classes/Solutions?where={ "quiz":{ "__type": "Pointer", "className": "Quizzes", "objectId": "${quizId}" }}`
}

export async function createSolution(data) {
    await post(endpoints.solutions, data);
}

export async function getSolutionsByUserId(userId) {
    return await get(endpoints.solutionsByUserId(userId));
}

export async function getSolutionsByQuizId(quizId) {
    return await get(endpoints.solutionsByQuizId(quizId));
}

