import { deleteRecord, getSingleRecord } from "../data/records.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (record, isOWner, onDelete) => html`
    <section id="details">
    <div id="details-wrapper">
      <div>
        <img id="details-img" src=${record.imageUrl} alt="example1" />
        <p id="details-title">${record.item}</p>
      </div>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="details-price">Price: €${record.price}</p>
          <p class="details-availability">${record.availability}</p>
          <p class="type">Type: ${record.type}</p>
          <p id="item-description">${record.description}</p>
        </div>
        
        ${isOWner ? html`
              <div id="action-buttons">
                <a href="/edit/${record._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
              </div>`: null}
  
      </div>
    </div>
  </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const record = await getSingleRecord(id);

    const userData = getUserData();
    const isOWner = userData?._id == record._ownerId;

    render(detailsTemplate(record, isOWner, onDelete));

    async function onDelete() {
      const choice = confirm('Are you sure?');

      if (choice) {
        await deleteRecord(id);
        page.redirect('/catalog');
      }
    }
};

