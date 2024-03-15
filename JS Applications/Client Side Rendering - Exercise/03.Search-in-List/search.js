import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const root = document.getElementById('towns');

const searchBtn = Array.from(document.getElementsByTagName('button'))[0];
searchBtn.addEventListener('click', loadTowns);

const divResult = document.getElementById('result');

const template = (towns, townInput) => html`
<ul>
   ${towns.map((town) => html`<li class=${classType(town, townInput)}>${town}</li>`)}
</ul>
`

start();

function start() {
   render(template(towns), root);
}

function loadTowns() {
   let townInput = document.getElementById('searchText').value;
   if (townInput.length == 0) {
      townInput = "1";
   }
   render(template(towns, townInput), root);

   const activeElements = document.querySelectorAll('.active');
   divResult.textContent = `${activeElements.length} matches found`;
}

function classType(currTown, townInput) {
   if (currTown.startsWith(townInput)) {
      return 'active';
   }
}
