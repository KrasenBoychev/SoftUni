import { get } from "./api.js";

export async function getFurniture() {
    return get('/data/catalog');
}

export async function getFurnitureById(id) {
    return get('/data/catalog/' + id);
}