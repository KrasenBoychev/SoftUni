import { getCarById, deleteCarById } from "../data/cars.js";
import { html, renderContent } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (car, isOwner) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${car.imageUrl}" alt="example1" />
            <p id="details-title">${car.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">Price: €${car.price}</p>
                <p class="weight">Weight: ${car.weight} kg</p>
                <p class="top-speed">Top Speed: ${car.speed} kph</p>
                <p id="car-description">${car.about}</p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ? html`
                            <div id="action-buttons">
                                <a href="/edit/${car._id}" id="edit-btn">Edit</a>
                                <a href="/dashboard" id="delete-btn" @click=${deleteCar}>Delete</a>
                             </div> `
                        : ""
                }
             
            </div>
          </div>
        </section>
`;

let carId = null;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    carId = id;
    const car = await getCarById(carId);

    const userData = getUserData();
    const isOwner = car._ownerId == userData?._id;

    renderContent(detailsTemplate(car, isOwner));
}

async function deleteCar() {
    alert('Are you sure you want to delete this item?');

    await deleteCarById(carId);
}

