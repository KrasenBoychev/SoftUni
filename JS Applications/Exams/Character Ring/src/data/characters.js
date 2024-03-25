import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/characters?sortBy=_createdOn%20desc',
    characters: '/data/characters',
    charactersById: '/data/characters/'
}

export async function getAllCharacters() {
    return get(endpoints.dashboard);
}

export async function getCharacterById(id) {
    return get(endpoints.charactersById + id);
}

export async function createCharacter(data) {
    return post(endpoints.characters, data);
}

export async function updateCharacter(id, data) {
    return put(endpoints.charactersById + id, data);
}

export async function deleteCharacter(id) {
    return del(endpoints.charactersById + id);
}