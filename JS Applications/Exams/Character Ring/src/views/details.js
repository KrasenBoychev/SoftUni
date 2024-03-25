import { getCharacterById, deleteCharacter } from "../data/characters.js";
import { likeCharacter, getLikesForCharacterForUser, getTotalLikesForCharacter } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (character, hasUser, isOwner, onDelete, likes, characterUserLikes, clickLike) => html`
    <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${character.imageUrl} alt="example1" />
      <div>
        <p id="details-category">${character.category}</p>
        <div id="info-wrapper">
            <div id="details-description">
            <p id="description">${character.description}</p>
            <p id ="more-info">${character.moreInfo}</p>
            </div>
        </div>
        <h3>Is This Useful:<span id="likes">${likes}</span></h3>

         <!--Edit and Delete are only for creator-->
         ${hasUser ? html`
                <div id="action-buttons">
                    ${isOwner ? html`
                    <a href="/edit/${character._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : (!characterUserLikes ? html`
                    <a href="javascript:void(0)" id="like-btn" @click=${clickLike}>Like</a>` : null)} 
                </div> `: null}
      </div>
    </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;

    const requests = [
        getCharacterById(id),
        getTotalLikesForCharacter(id)
    ];

    const user = getUserData();
    if (user) {
        requests.push(getLikesForCharacterForUser(id, user._id));
    }

    const [character, likes, characterUserLikes] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == character._ownerId;

    render(detailsTemplate(character, hasUser, isOwner, onDelete, likes, characterUserLikes, clickLike))

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteCharacter(id);
            page.redirect('/dashboard');
        }
    }

    async function clickLike() {
        await likeCharacter(id);
        page.redirect('/dashboard/' + id);
    }
}