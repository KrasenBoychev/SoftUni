import { get, post, put, del } from "./request.js";

const endpoints = {
    allQuizes: '/classes/Quizzes',
    latestQuiz: () => `/classes/Quizzes?order=createdAt`,
    //quizzesByOwnerIdOrdered: (userId) => `/classes/Quizzes?where={"ownerId":{ "__type": "Pointer", "className": "_User", "objectId": "${userId}" }}&&order=createdAt`,
    quizzesCount: '/classes/Quizzes?count=1',
    uniqueTopics: '/aggregate/Quizzes?distinct=topic',
    quizzesByOwnerId: (ownerId) => `/classes/Quizzes?where={"ownerId":{"__type":"Pointer","className":"_User","objectId":"${ownerId}"}}`,
    filterByTopicAndTitle: (title, topic) => `/classes/Quizzes?where={"title": "${title}", "topic": "${topic}"}`,
    filterByTopic: (topic) => `/classes/Quizzes?where={"topic": "${topic}"}`,
    filterByTitle: (title) => `/classes/Quizzes?where={"title": "${title}"}` 
}



export async function getAllQuizzes() {
    return await get(endpoints.allQuizes);
} 

export async function getQuizById(id) {
    return await get(endpoints.allQuizes + "/" + id);
} 

export async function getLatestQuiz() {
    return await get(endpoints.latestQuiz());
}

export async function getQuizzesCount() {
    return await get(endpoints.quizzesCount);
}

export async function createQuiz(data) {
    await post(endpoints.allQuizes, data);
}

export async function getUniqueTopics() {
    return await get(endpoints.uniqueTopics);
}

export async function getQuizzesfilteredByTopic(topic) {
    return await get(endpoints.filterByTopic(topic));
}

export async function getQuizzesfilteredByTitle(title) {
    return await get(endpoints.filterByTitle(title));
}

export async function getQuizzesfilteredByTopicAndTitle(title, topic) {
    return await get(endpoints.filterByTopicAndTitle(title, topic));
}

export async function getQuizzesByOwnerId(ownerId) {
    return await get(endpoints.quizzesByOwnerId(ownerId));
}

export async function deleteQuiz(id) {
    await del(endpoints.allQuizes + "/" + id);
}

export async function updateQuiz(id, data) {
    await put(endpoints.allQuizes + "/" + id, data);
}

// export async function getQuizzesByOwnerIdOrdered(userId) {
//     return await get(endpoints.quizzesByOwnerIdOrdered(userId));
// }