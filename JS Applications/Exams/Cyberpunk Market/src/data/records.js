import { get, post, put, del } from "./request.js"


const endpoints = {
    listOfRecords: '/data/cyberpunk?sortBy=_createdOn%20desc',
    records: '/data/cyberpunk'
}

export async function getListOfRecords() {
    return await get(endpoints.listOfRecords);
}

export async function createRecord(data) {
    return await post(endpoints.records, data);
}