import { getListOfRecords } from "../data/records.js";
import { html, render } from "../lib.js";

const catalogTemplate= (records) => html`
    <h3 class="heading">Market</h3>
  <section id="dashboard">
    ${records.length ? records.map((record) => recordTemplate(record)) : html`<h3 class="empty">No Items Yet</h3>`}
  </section>
`;

const recordTemplate = (record) => html`
    <div class="item">
      <img src=${record.imageUrl} alt="example1" />
      <h3 class="model">${record.item}</h3>
      <div class="item-info">
        <p class="price">Price: €${record.price}</p>
        <p class="availability">${record.availability}</p>
        <p class="type">Type: ${record.type}</p>
      </div>
      <a class="details-btn" href="/details/${record._id}">Uncover More</a>
    </div>
`;

export async function showCatalog(ctx) {
    const records = await getListOfRecords();
    render(catalogTemplate(records));
}