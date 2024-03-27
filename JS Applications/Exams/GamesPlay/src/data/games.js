import { del, get, post, put } from './request.js';

const endpoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc',
    topThreeGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games',
    gameById: '/data/games/'
};

export async function getAllGames() {
    return get(endpoints.allGames);
}

export async function getTopThreeGames() {
    return get(endpoints.topThreeGames);
}

export async function createGame(data) {
    return post(endpoints.games, data);
}

export async function getGameById(id) {
    return get(endpoints.gameById + id);
}


export async function updateGame(id, data) {
    return put(endpoints.gameById + id, data);
}

export async function deleteGame(id) {
    return del(endpoints.gameById + id);
}