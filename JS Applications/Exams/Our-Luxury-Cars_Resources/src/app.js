import { page } from "./lib.js";
import { showOurCars } from "./views/dashboard.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/dashboard', showOurCars);

page();