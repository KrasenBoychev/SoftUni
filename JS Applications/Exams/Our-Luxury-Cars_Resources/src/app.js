import { page } from "./lib.js";
import { showCreate } from "./views/create.js";
import { showOurCars } from "./views/dashboard.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showOurCars);
page('/add-your-car', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);

page();