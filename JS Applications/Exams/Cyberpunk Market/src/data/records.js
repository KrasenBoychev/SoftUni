import { get, post, put, del } from "./request.js"


const endpoints = {
    listOfRecords: '/data/cyberpunk?sortBy=_createdOn%20desc'
}

export async function getListOfRecords() {
    return await get(endpoints.listOfRecords);
}