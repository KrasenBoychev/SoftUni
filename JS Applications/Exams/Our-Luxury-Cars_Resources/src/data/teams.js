import { get } from "./api.js";

export function getTeams() {
    return get('/data/teams');
}

export function getMembersByTeam(teamId) {
    return get(`/data/members?where=teamId%3D%22${teamId}%22&count`);
}

// export function getMembers(teamId, teamsIds) {
//     return get(`/data/members?where=${encodeURIComponent(`${teamId} IN (${teamsIds}) AND status="member"`)}`);
// }
