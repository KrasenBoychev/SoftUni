import { get, post, put, del } from "./request.js"


const endpoints = {
    listOfRecords: '/data/cyberpunk?sortBy=_createdOn%20desc',
    records: '/data/cyberpunk'
}

export async function getListOfRecords() {
    return await get(endpoints.listOfRecords);
}

export async function createRecord(data) {
    await post(endpoints.records, data);
}

export async function getSingleRecord(id) {
    return await get(endpoints.records + "/" + id);
}

export async function deleteRecord(id) {
    await del(endpoints.records + "/" + id);
}

export async function updateRecord(id, data) {
    await put(endpoints.records + "/" + id, data);
}

