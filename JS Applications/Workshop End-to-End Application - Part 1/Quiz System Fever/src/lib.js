import {html, render as renderBase} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

const rootMain = document.querySelector('main');

function render(templateResult) {
    renderBase(templateResult, rootMain);
}

function renderTemplate(templateResult, root) {
    renderBase(templateResult, root);
}

export {
    html,
    render,
    renderTemplate,
    classMap,
    styleMap,
    page
}
