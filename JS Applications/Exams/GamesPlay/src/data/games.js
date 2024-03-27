import { del, get, post, put } from './request.js';

const endpoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc',
    topThreeGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games',
    eventById: '/data/events/'
}

export async function getAllGames() {
    return get(endpoints.allGames);
}

export async function getTopThreeGames() {
    return get(endpoints.topThreeGames);
}

export async function createGame(data) {
    return post(endpoints.games, data);
}

// export async function getEventById(id) {
//     return get(endpoints.eventById + id);
// }


// export async function updateEvent(id, data) {
//     return put(endpoints.eventById + id, data);
// }

// export async function deleteEvent(id) {
//     return del(endpoints.eventById + id);
// }