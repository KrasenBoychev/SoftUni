import { editCarById, getCarById, validateForm } from "../data/cars.js";
import { html, page, renderContent } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editItemTemplate = (onEdit) => html`
    <section id="edit">
          <div class="form form-auto">
            <h2>Edit Your Car</h2>
            <form class="edit-form" @submit=${onEdit}>
              <input type="text" name="model" id="model" placeholder="Model" />
              <input
                type="text"
                name="imageUrl"
                id="car-image"
                placeholder="Your Car Image URL"
              />
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price in Euro"
              />
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight in Kg"
              />
              <input
                type="text"
                name="speed"
                id="speed"
                placeholder="Top Speed in Kmh"
              />
              <textarea
                id="about"
                name="about"
                placeholder="More About The Car"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Edit</button>
            </form>
          </div>
        </section>
`;

let carId = null;

export async function showEdit(ctx) {
    renderContent(editItemTemplate(createSubmitHandler(onEdit)));

    const id = ctx.params.id;
    carId = id;
    const car = await getCarById(carId);

    document.getElementById('model').value = car.model;
    document.getElementById('car-image').value = car.imageUrl;
    document.getElementById('price').value = car.price;
    document.getElementById('weight').value = car.weight;
    document.getElementById('speed').value = car.speed;
    document.getElementById('about').value = car.about;
}

async function onEdit({ model, imageUrl, price, weight, speed, about }) {

    let isValid = true;

    isValid = validateForm(model, imageUrl, price, weight, speed, about, isValid);

    if (isValid == false) {
        return;
    }

    const data = { model, imageUrl, price, weight, speed, about };

    await editCarById(carId, data);

    page.redirect(`/details/${carId}`);

}