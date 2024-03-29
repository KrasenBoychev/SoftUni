import {html, render as renderBase} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { classMap } from '../node_modules/lit-html/directives/class-map.js';
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';

// TODO select correct root based on exam HTML
const root = document.querySelector('main');

function render(templateResult) {
    renderBase(templateResult, root);
}

function renderFilteredQuizzes(templateResult, rootFilteredQuizzes) {
    renderBase(templateResult, rootFilteredQuizzes);
}

export {
    html,
    render,
    renderFilteredQuizzes,
    classMap,
    styleMap,
    page
}
