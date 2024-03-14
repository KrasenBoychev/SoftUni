import { del, get, post } from "./requester.js"


const endPoints = {
    getAllIdeas: "data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    singleIde: "data/ideas/"
}

async function getAllIdes() {
    return await get(endPoints.getAllIdeas);
}

async function getIdea(id) {
    return await get(endPoints.singleIde + id);
}

async function createIdea(data) {
    return await post(endPoints.singleIde, data);
}

async function removeIdea(id) {
    return await del(endPoints.singleIde + id);
}

export const dataService = {
    getAllIdes,
    getIdea,
    createIdea, 
    removeIdea
}