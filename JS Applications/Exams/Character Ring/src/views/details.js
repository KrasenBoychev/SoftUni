import { getCharacterById, deleteCharacter } from "../data/characters.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (character, isOwner, onDelete) => html`
    <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${character.imageUrl} alt="example1" />
      <div>
      <p id="details-category">${character.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
          ${character.description}
            </p>
             <p id ="more-info">
             ${character.moreInfo}
                  </p>
        </div>
      </div>
        <h3>Is This Useful:<span id="likes">0</span></h3>

         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
                <div id="action-buttons">
                    <a href="/edit/${character._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : html`
                    <a href="javascript:void(0)" id="like-btn">Like</a>`}
                </div>
      </div>
  </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const user = getUserData();

    const character = await getCharacterById(id);
    
    const isOwner = user._id == character._ownerId;

    render(detailsTemplate(character, isOwner, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteCharacter(id);
            page.redirect('/dashboard');
        }
    }
}