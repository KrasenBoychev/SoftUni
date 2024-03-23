import { page } from "./lib.js";
import { showHome } from "./views/home.js";

page('/', showHome);

page();

export const divContent = document.getElementById('content');
export const bodyElement = document.querySelector('body');