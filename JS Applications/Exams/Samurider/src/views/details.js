import { getMotorcycleById, deleteMotorcycle } from "../data/motorcycles.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (motorcycle, isOwner, onDelete) => html`
    <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${motorcycle.imageUrl} alt="example1" />
      <p id="details-title">${motorcycle.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${motorcycle.year}</p>
          <p class="mileage">Mileage: ${motorcycle.mileage} km.</p>
          <p class="contact">Contact Number: ${motorcycle.contact}</p>
             <p id = "motorcycle-description">${motorcycle.about}</p>
        </div>
         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${motorcycle._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
            </div>` : null}
      </div>
  </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const motorcycle = await getMotorcycleById(id);
    
    const user = getUserData();
    const isOwner = user._id == motorcycle._ownerId;

    render(detailsTemplate(motorcycle, isOwner, onDelete));

    async function onDelete() {
      const choice = confirm('Are you sure?');

      if (choice) {
        await deleteEvent(id);
        page.redirect('/catalog');
      }
    }
};

