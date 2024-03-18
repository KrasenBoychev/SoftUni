import { getFurnitureById } from "../data/furniture.js";
import { html, renderContent } from "../lib.js";
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
                        <img src="${(furniture.img).slice(1)}" />npm
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
                        <a href="/delete" class="btn btn-red">Delete</a>
                        `
                      : html``
                    }
                </div>
            </div>
        </div>
`;

export async function showDetails(ctx) {
    const furnitureId = ctx.params.furnitureId;
    const furniture = await getFurnitureById(furnitureId);

    const userData = getUserData();
    const isOwner = furniture._ownerId == userData?._id;

    renderContent(detailsTemplate(furniture, isOwner));
}



