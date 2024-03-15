import { html, render } from "./node_modules/lit-html/lit-html.js"

const URL = 'http://localhost:3030/jsonstore/advanced/dropdown';

const root = document.getElementById('menu');
const submitInput = document.querySelector('input[type="submit"]');
submitInput.addEventListener('click', addOption);

const template = (items) => html`
    ${items.map((item) => html`
        <option value=${item._id}>
            ${item.text}
        </option>
    `)}
`

loadTowns();

async function loadTowns() {
    try {
        const response = await fetch(URL);
        const items = await response.json();

        if (!response) {
            const err = response.json();
            alert(err.message);
        }

        render(template(Object.values(items)), root);

    } catch (err) {
        alert(err.message);
    }
}

async function addOption(event) {
    event.preventDefault();

    const itemInput = document.getElementById('itemText').value;

    if (!itemInput) {
        return;
    }

    try {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({text: itemInput})
        });

    } catch (err) {
        alert(err.message);
    }

    loadTowns();

    document.getElementById('itemText').value = "";
}