import { render, html } from "../lib.js";
import { filterMotocycles } from "../data/motorcycles.js";


const searchTemplate = (onSearch, foundMotorcycles) => html`
<section id="search">
<div class="form">
    <h4>Search</h4>
    <form class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list" @click=${onSearch}>Search</button>
    </form>
</div>
<h4 id="result-heading">Results:</h4>
<div class="search-result">
    ${foundMotorcycles.length > 0 ? html`
    ${foundMotorcycles.map((motorcycle) => motocycleTemplate(motorcycle))}` : html`<h2 class="no-avaliable">No result.</h2>`}
</div>
</section>
`;

const motocycleTemplate = (motorcycle) => html`
     <div class="motorcycle">
        <img src=${motorcycle.imageUrl} alt="example1" />
        <h3 class="model">${motorcycle.model}</h3>
        <a class="details-btn" href="/catalog/${motorcycle._id}">More Info</a>
    </div>
`;

export async function showSearch(ctx) {
    let foundMotorcycles = [];
    render(searchTemplate(onSearch, foundMotorcycles));

    async function onSearch(e) {
        e.preventDefault();
        
        const searchedMotorcycles = document.getElementById('search-input').value;

        if (searchedMotorcycles.length == 0) {
            return alert('Search field required!');
        }

        const foundMotorcycles = await filterMotocycles(searchedMotorcycles);
        render(searchTemplate(onSearch, foundMotorcycles));
    }
}