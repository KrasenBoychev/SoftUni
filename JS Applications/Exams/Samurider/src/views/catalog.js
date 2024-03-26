import { getAllMotorcycles } from "../data/motorcycles.js";
import { html, render } from "../lib.js";

const catalogTemplate= (motorcycles) => html`
  <h2>Available Motorcycles</h2>
  <section id="dashboard">
    ${motorcycles.length ? motorcycles.map(motorcycleTemplate) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
  </section>
`;

const motorcycleTemplate = (motorcycle) => html`
    <div class="motorcycle">
      <img src=${motorcycle.imageUrl} alt="example1" />
      <h3 class="model">${motorcycle.model}</h3>
      <p class="year">Year: ${motorcycle.year}</p>
      <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
      <p class="contact">Contact Number: ${motorcycle.contact}</p>
      <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
    </div>
`;

export async function showCatalog(ctx) {
    const motorcycles = await getAllMotorcycles();
    render(catalogTemplate(motorcycles));
}