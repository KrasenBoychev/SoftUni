import { getCars } from "../data/cars.js";
import { html, renderContent } from "../lib.js";
import { showNav } from "./nav.js";


const ourCarsTemplate = (cars) => html`
    <h3 class="heading">Our Cars</h3>
    <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${cars.map(car => carTemplate(car))}
        </section>
`;

const carTemplate = (car) => html`
          <div class="car">
            <img src="${car.imageUrl}" alt="example1" />
            <h3 class="model">${car.model}</h3>
            <div class="specs">
              <p class="price">Price: €${car.price}</p>
              <p class="weight">Weight: ${car.weight} kg</p>
              <p class="top-speed">Top Speed: ${car.speed} kph</p>
            </div>
            <a class="details-btn" href="/details/${car._id}">More Info</a>
          </div>
`;

const noCarsTemplate = () => html`
    <h3 class="heading">Our Cars</h3>
    <h3 class="nothing">Nothing to see yet</h3>
`;

export async function showOurCars() {
    const cars = await getCars();

    if (cars) {
        renderContent(ourCarsTemplate(cars));
    } else {
        renderContent(noCarsTemplate());
    }

    showNav();
}
