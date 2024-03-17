import { render as renderBase, html } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";

const rootContent = document.querySelector('.container');
const rootNav = document.querySelector('nav');

function renderContent(templateResult) {
    renderBase(templateResult, rootContent);
}

function renderNav(templateResult) {
    renderBase(templateResult, rootNav);
}

export {
    renderContent,
    renderNav,
    html,
    page
}
