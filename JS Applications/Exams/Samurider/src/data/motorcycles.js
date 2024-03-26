import { del, get, post, put } from "./request.js";

const endpoints = {
    dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
    motorcycles: '/data/motorcycles',
    motorcycleById: '/data/motorcycles/',
    filteredMotorcycles: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`
}

export async function getAllMotorcycles() {
    return get(endpoints.dashboard);
}

export async function getMotorcycleById(id) {
    return get(endpoints.motorcycleById + id);
}

export async function createMotorcycle(data) {
    return post(endpoints.motorcycles, data);
}

export async function updateMotorcycle(id, data) {
    return put(endpoints.motorcycleById + id, data);
}

export async function deleteMotorcycle(id) {
    return del(endpoints.motorcycleById + id);
}

export async function filterMotocycles(query) {
    return get(endpoints.filteredMotorcycles(query));
}