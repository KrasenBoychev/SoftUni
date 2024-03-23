import { get } from "./api.js";

export function getTeams() {
    return get('/data/teams');
}

export function getMembers(teamId) {
    return get(`/data/members?distinct=${teamId}&count`);
}

// export function getMembers(teamId, teamsIds) {
//     return get(`/data/members?where=${encodeURIComponent(`${teamId} IN (${teamsIds}) AND status="member"`)}`);
// }
