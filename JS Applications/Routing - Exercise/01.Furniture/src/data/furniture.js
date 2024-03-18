import { get, post, put, del } from "./api.js";

export async function getFurniture() {
    return get('/data/catalog');
}

export async function getFurnitureById(id) {
    return get('/data/catalog/' + id);
}

export async function createFurniture() {
    return post('/data/catalog');
}

export async function editFurniture(id, data) {
    return put('/data/catalog/' + id, data);
}

export async function deleteFurniture(id) {
    return del('/data/catalog/' + id);
}

export function validateForm(make, model, year, description, price, img, isValid) {
    if (make.length < 4) {
        //alert('Make must be at least 4 symbols long');
        isValid = false;
        document.getElementById('new-make').classList.add('is-invalid');
    } else {
        document.getElementById('new-make').classList.remove('is-invalid');
        document.getElementById('new-make').classList.add('is-valid');
    }

    if (model.length < 4) {
        //alert('Model must be at least 4 symbols long');
        isValid = false;
        document.getElementById('new-model').classList.add('is-invalid');
    } else {
        document.getElementById('new-model').classList.remove('is-invalid');
        document.getElementById('new-model').classList.add('is-valid');
    }

    if (year < 1950 || year > 2050) {
        //return alert('Year must be between 1950 and 2050');
        isValid = false;
        document.getElementById('new-year').classList.add('is-invalid');
    } else {
        document.getElementById('new-year').classList.remove('is-invalid');
        document.getElementById('new-year').classList.add('is-valid');
    }

    if (description <= 10) {
        //return alert('Description must be more than 10 symbols');
        isValid = false;
        document.getElementById('new-description').classList.add('is-invalid');
    } else {
        document.getElementById('new-description').classList.remove('is-invalid');
        document.getElementById('new-description').classList.add('is-valid');
    }

    if (price < 0 || !price) {
       // return alert('Price must be a positive number');
       isValid = false;
       document.getElementById('new-price').classList.add('is-invalid');
   } else {
       document.getElementById('new-price').classList.remove('is-invalid');
       document.getElementById('new-price').classList.add('is-valid');
   }

    if (img.length == 0) {
       // return alert('Image URL is required');
       isValid = false;
       document.getElementById('new-image').classList.add('is-invalid');
   } else {
       document.getElementById('new-image').classList.remove('is-invalid');
       document.getElementById('new-image').classList.add('is-valid');
   }

    document.getElementById('new-material').classList.add('is-valid');

    return isValid;
}