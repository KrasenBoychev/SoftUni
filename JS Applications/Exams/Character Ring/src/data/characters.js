import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/characters?sortBy=_createdOn%20desc'
}

export async function getAllCharacters() {
    return get(endpoints.dashboard);
}