import { html, renderContent } from "../lib.js";
import { getUserData } from "../util.js";
import { showNav } from "./nav.js";

const homeTemplate = () => html`
       <section id="hero">
          <h1>
            Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
          </h1>
        </section>
`;

export async function showHome(ctx) {
    renderContent(homeTemplate());
    showNav();
}
