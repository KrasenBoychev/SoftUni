import { logout } from "./data/users.js";
import { page } from "./lib.js";
import { updateUserNav } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

updateUserNav();

page('/', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/browse', showCatalog);
page('/create', showCreate);

page.start();

document.getElementById('logoutBtn').addEventListener('click', async () => {
    logout();
    updateUserNav();
    page.redirect('/')
});
