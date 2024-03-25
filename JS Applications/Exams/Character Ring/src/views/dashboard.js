import { getAllCharacters } from "../data/characters.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (characters) => html`
  <h2>Characters</h2>
  <section id="characters">
    ${characters.length ? characters.map(characterTemplate) : html`<h2>No added Heroes yet.</h2>`}
  </section>
`;

const characterTemplate = (character) => html`
    <div class="character">
        <img src=${character.imageUrl} />
        <div class="hero-info">
        <h3 class="category">${character.category}</h3>
        <p class="description">${character.description}</p>
        <a class="details-btn" href="/dashboard/${character._id}">More Info</a>
        </div>
    </div>
`;

export async function showDashboard(ctx) {
    const characters = await getAllCharacters();
    render(dashboardTemplate(characters))
} 