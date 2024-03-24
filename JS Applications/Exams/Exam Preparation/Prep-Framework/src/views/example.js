import { html, render } from "../lib.js";

const exampleTemplate = () => html`
<section>
    <p>Sample content</p>
</section>
`;

export function showExample(ctx) {
    render(exampleTemplate());
}