import { get, post, put, del } from "./api.js";

export function getCars() {
    return get('/data/cars?sortBy=_createdOn%20desc');
}

export function getCarById(id) {
    return get('/data/cars/' + id);
}

export function createCar(data) {
    return post('/data/cars', data);
}

export function validateForm(imageUrl, price, weight, speed, about, isValid) {
    if (!imageUrl || !price || !weight || !speed || !about) {
        isValid = false;
    }

    return isValid;
}
