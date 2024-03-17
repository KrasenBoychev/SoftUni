import { page } from "./lib.js";
import { showHome } from "./views/home.js";

page('/catalog', showHome);

page();