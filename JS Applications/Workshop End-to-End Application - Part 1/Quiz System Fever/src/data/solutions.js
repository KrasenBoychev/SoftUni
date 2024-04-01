import { get, post, put, del } from "./request.js";

const endpoints = {
    solutions: '/classes/Solutions',
    solutionsByUserId: (userId) => `/classes/Solutions?where={"userId":{"__type":"Pointer","className":"_User","objectId":"${userId}"}}`
}

export async function createSolution(data) {
    await post(endpoints.solutions, data);
}

export async function getSolutionsByUserId(userId) {
    return await get(endpoints.solutionsByUserId(userId));
}

