import { page } from "./lib.js";
import { showTeams } from "./views/browseTeams.js";
import { showHome } from "./views/home.js";

page('/', showHome);
page('/browse-teams', showTeams);

page();

export const divContent = document.getElementById('content');
export const bodyElement = document.querySelector('body');