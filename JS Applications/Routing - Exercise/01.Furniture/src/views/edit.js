import { validateForm, editFurniture, getFurnitureById } from "../data/furniture.js";
import { html, page, renderContent } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editItemTemplate = (onEdit) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onEdit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value="">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model" value="">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year" value="">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value="">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value="">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value="">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value="">
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`;

let furnitureId = null;

export async function showEdit(ctx) {
    renderContent(editItemTemplate(createSubmitHandler(onEdit)));

    const id = ctx.params.furnitureId;
    furnitureId = id;
    const furniture = await getFurnitureById(furnitureId);

    document.getElementById('new-make').value = furniture.make;
    document.getElementById('new-model').value = furniture.model;
    document.getElementById('new-year').value = furniture.year;
    document.getElementById('new-description').value = furniture.description;
    document.getElementById('new-price').value = furniture.price;
    document.getElementById('new-image').value = furniture.img;
    document.getElementById('new-material').value = furniture.material;
}

async function onEdit({ make, model, year, description, price, img, material }) {

    let isValid = true;

    isValid = validateForm(make, model, year, description, price, img, isValid);

    if (isValid == false) {
        return;
    }

    const data = { make, model, year, description, price, img, material };

    await editFurniture(furnitureId, data);

    page.redirect('/catalog');

}
