import { getCarById, deleteCarById } from "../data/cars.js";
import { html, renderContent, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (car, isOwner, deleteCar) => html`
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
                             </div> ` : null }
            </div>
          </div>
        </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const car = await getCarById(id);

    const userData = getUserData();
    const isOwner = car._ownerId == userData?._id;

    renderContent(detailsTemplate(car, isOwner, deleteCar));

    async function deleteCar() {
      const choice = confirm('Are you sure?');

      if (choice) {
        await deleteCarById(id);
        page.redirect('/dashboard');
      }
  }
}



