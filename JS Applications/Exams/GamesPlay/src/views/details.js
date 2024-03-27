import { deleteGame, getGameById, getGameComments, createComment } from '../data/games.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler, getUserData } from '../util.js';

const detailsTemplate = (game, comments, user, isOwner, onDelete, addComment) => html`
    <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>${game.title}</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">${game.summary}</p>

        <div class="details-comments">
            <h2>Comments:</h2>
            <ul> 
               ${comments.length > 0 ? comments.map(comment => commentTemplate(comment)) : html` <p class="no-comment">No comments.</p>`}
            </ul>
        </div>

      ${isOwner ? html`
                    <div class="buttons">
                        <a href="/edit/${game._id}" class="button">Edit</a>
                        <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                    </div>` : null }  
    </div>

    ${(user && !isOwner) ? html`
        <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${addComment}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input class="btn submit" type="submit" value="Add Comment">
            </form>
        </article> ` : null}
</section>
`;

const commentTemplate = (comment) => html`
                <li class="comment">
                    <p>Content: ${comment.comment}</p>
                </li>
`;

export async function showDetails(ctx) {
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);

    const comments = await getGameComments(gameId);

    const user = getUserData();
    const isOwner = user?._id == game._ownerId;

    render(detailsTemplate(game, comments, user, isOwner, onDelete, createSubmitHandler(addComment)));

    async function onDelete() {
      const choice = confirm('Are you sure?');

      if (choice) {
        await deleteGame(gameId);
        page.redirect('/catalog');
      }
    }

    async function addComment({comment}, form) {
       if (!comment) {
            return alert('Add Comment!');
       }

       await createComment({gameId, comment});

       form[0].value = '';
       page.redirect('/catalog/' + gameId);
    }
};

