import { getAllGames } from "../data/games.js";
import { html, render } from "../lib.js";

const catalogTemplate= (games) => html`
 <section id="catalog-page">
    <h1>All Games</h1>
    ${games.length > 0 ? games.map(game => gameTemplate(game)) : html`<h3 class="no-articles">No articles yet</h3>`}
</section>
`;

const gameTemplate = (game) => html`
   <div class="allGames">
        <div class="allGames-info">
            <img src=${game.imageUrl}>
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/catalog/${game._id}" class="details-button">Details</a>
        </div>
    </div>
`;

export async function showCatalog(ctx) {
    const games = await getAllGames();
    render(catalogTemplate(games));
}