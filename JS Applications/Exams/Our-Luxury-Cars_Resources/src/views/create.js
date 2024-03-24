import { createCar, validateForm } from "../data/cars.js";
import { html, page, renderContent } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showNav } from "./nav.js";

const createCarTemplate = (onCreate) => html`
    <section id="create">
          <div class="form form-auto">
            <h2>Share Your Car</h2>
            <form class="create-form" @submit=${onCreate}>
              <input type="text" name="model" id="model" placeholder="Model"/>
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
              <button type="submit">Add</button>
            </form>
          </div>
        </section>
`;

export function showCreate() {
    renderContent(createCarTemplate(createSubmitHandler(onCreate)));

    showNav();
}

async function onCreate({ model, imageUrl, price, weight, speed, about }) {
    let isValid = true;

    isValid = validateForm( model, imageUrl, price, weight, speed, about, isValid);

    if (isValid == false) {
        alert("All fields are required!")
        return;
    }

    await createCar({model, imageUrl, price, weight, speed, about});

    page.redirect('/dashboard');

}
