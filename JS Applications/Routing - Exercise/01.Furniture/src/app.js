import { page } from "./lib.js";
import { showCreate } from "./views/create.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

page('/', showHome);
page('/catalog', showHome);
page('/register', showRegister);
page('/login', showLogin);
page('/create', showCreate);

page();