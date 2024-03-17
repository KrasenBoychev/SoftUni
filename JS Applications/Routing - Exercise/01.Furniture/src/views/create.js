import { createFurniture } from "../data/furniture.js";
import { html, page, renderContent } from "../lib.js";
import { createSubmitHandler } from "../util.js";

createSubmitHandler

const createItemTemplate = (onCreate) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onCreate}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                     </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`;

export function showCreate() {
    renderContent(createItemTemplate(createSubmitHandler(onCreate)));
}

async function onCreate({ make, model, year, description, price, img, material }) {
    let isValid = true;

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

    if (isValid == false) {
        return;
    }

    await createFurniture();

    page.redirect('/catalog');

}
