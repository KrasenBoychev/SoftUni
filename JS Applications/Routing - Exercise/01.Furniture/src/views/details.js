import { getFurnitureById, deleteFurniture } from "../data/furniture.js";
import { html, page, renderContent } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (furniture, isOwner) => html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${(furniture.img).slice(1)}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                <div>
                    ${isOwner ? 
                        html`
                        <a href="/catalog/${furniture._id}/edit" class="btn btn-info">Edit</a>
                        <a href="#" class="btn btn-red" @click=${deleteItem}>Delete</a>
                        `
                      : html``
                    }
                </div>
            </div>
        </div>
`;

let furnitureId = null;

export async function showDetails(ctx) {
    const id = ctx.params.furnitureId;
    furnitureId = id;
    const furniture = await getFurnitureById(furnitureId);

    const userData = getUserData();
    const isOwner = furniture._ownerId == userData?._id;

    renderContent(detailsTemplate(furniture, isOwner));
}

async function deleteItem() {
    alert('Are you sure you want to delete this item?');

    await deleteFurniture(furnitureId);

    page.redirect('/catalog');
}

