import { get } from "./api.js";

export function getCars() {
    return get('/data/cars?sortBy=_createdOn%20desc');
}

// export function getMembersByTeam(teamId) {
//     return get(`/data/members?where=teamId%3D%22${teamId}%22&count`);
// }

// export function getMembers(teamId, teamsIds) {
//     return get(`/data/members?where=${encodeURIComponent(`${teamId} IN (${teamsIds}) AND status="member"`)}`);
// }
