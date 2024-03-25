import { get, post } from "./request.js";

const endpoints = {
    likeCharacter: '/data/useful',
    totalLikesForCharacter: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
    characterLikesForSpecificUser: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeCharacter(characterId) {
    await post(endpoints.likeCharacter, { characterId });
}

export async function getTotalLikesForCharacter(characterId) {
    return await get(endpoints.totalLikesForCharacter(characterId));
}

export async function getLikesForCharacterForUser(characterId, userId) {
    return get(endpoints.characterLikesForSpecificUser(characterId, userId));
}