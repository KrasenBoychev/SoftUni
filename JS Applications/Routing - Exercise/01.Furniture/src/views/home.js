import { getFurniture } from "../data/furniture.js";
import { html, renderContent } from "../lib.js";
import { showNav } from "./nav.js";

const homeTemplate = (furniture) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            <!-- list items -->
            ${furniture.map(itemTemplate)}
        </div>
`;

export const itemTemplate = (item) => html`
 <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${item.img}" />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/catalog/${item._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`;

export async function showHome(ctx) {
    const furniture = await getFurniture();
    renderContent(homeTemplate(furniture));
    showNav();
}
