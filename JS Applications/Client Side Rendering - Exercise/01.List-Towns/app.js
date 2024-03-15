import { html, render } from "./node_modules/lit-html/lit-html.js";

document.getElementById('btnLoadTowns').addEventListener('click', loadTowns);
const root = document.getElementById('root');

const template = (towns) => html`
<ul>
${towns.map((t) => html`<li>${t}</li>`)}
</ul>
`

function loadTowns(event) {
    event.preventDefault();

    const towns = document.getElementById('towns').value.split(', ');
    render(template(towns), root);
}
