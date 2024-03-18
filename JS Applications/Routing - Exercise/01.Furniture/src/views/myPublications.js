import { getFurniture } from "../data/furniture.js";
import { html, renderContent } from "../lib.js";
import { getUserData } from "../util.js";
import { itemTemplate } from "./home.js";
import { showNav } from "./nav.js";

const publicationsTemplate = (furniture, userId) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${furniture.map(item => item._ownerId == userId ? itemTemplate(item) : "")}
        </div>
`

export async function showPublications(ctx) {
    const userData = getUserData();
    const userId = userData._id;

    const furniture = await getFurniture();

    renderContent(publicationsTemplate(furniture, userId));

    showNav();
}