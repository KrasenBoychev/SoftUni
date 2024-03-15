import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById('allCats');

const template = (catsArr) => html`
<ul>
    ${catsArr.map((cat) => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${showStatusCode}>Show status code</button>
                    <div class="status" style="display: none" id=${cat.id}>
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`)}
</ul>
`

load();

function load() {
    render(template(cats), root)
}

function showStatusCode(event) {
    event.preventDefault();

    const divInfo = event.target.parentElement;
    const divStatus = divInfo.querySelector('.status');

    if (divStatus.style.display == 'none') {
        divStatus.style.display = 'block';
        event.target.textContent = 'Hide status code';

    } else { 
        divStatus.style.display = 'none';
        event.target.textContent = 'Show status code';
    }
}
