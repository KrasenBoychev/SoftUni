import { html, renderTemplate } from "../lib.js";

export function loading() {
    return function (ctx, next) {
        ctx.render(loadingTemplate());
        next();
    }
}

export function loadingPage(command) {
    const root = document.getElementById('loading-page');

    if (command == 'attach') {
       // renderTemplate(loadingTemplate(), root);
        root.style.display = 'block';
    }

    if (command == 'remove') {
      //  root.textContent = "";
        root.style.display = 'none';
    }
   
}

export const loadingTemplate = () => html`
    <div class="pad-large alt-page async">
          <div class="sk-cube-grid">
              <div class="sk-cube sk-cube1"></div>
              <div class="sk-cube sk-cube2"></div>
              <div class="sk-cube sk-cube3"></div>
              <div class="sk-cube sk-cube4"></div>
              <div class="sk-cube sk-cube5"></div>
              <div class="sk-cube sk-cube6"></div>
              <div class="sk-cube sk-cube7"></div>
              <div class="sk-cube sk-cube8"></div>
              <div class="sk-cube sk-cube9"></div>
          </div>
    </div>
`;