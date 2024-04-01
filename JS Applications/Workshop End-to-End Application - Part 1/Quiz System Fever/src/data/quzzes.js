import { get, post, put, del } from "./request.js";

const endpoints = {
    allQuizes: '/classes/Quizzes',
    latestQuiz: (quizzesToSkip) => `/classes/Quizzes?order=createdAt&&skip=${quizzesToSkip}`,
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

export async function getLatestQuiz(quizzesToSkip) {
    return await get(endpoints.latestQuiz(quizzesToSkip));
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