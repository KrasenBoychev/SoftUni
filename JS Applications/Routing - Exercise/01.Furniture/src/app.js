import { page } from "./lib.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showPublications } from "./views/myPublications.js";
import { showRegister } from "./views/register.js";

page('/', showHome);
page('/catalog', showHome);
page('/catalog/:furnitureId', showDetails);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);
page('/catalog/:furnitureId/edit', showEdit);
page('/my-publications', showPublications);

page();