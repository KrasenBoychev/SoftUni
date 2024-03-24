import { html, page, renderNav } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";
import { logout } from "../data/users.js";

const guestNavTemplate = () => html`
    <a href="/browse-teams" class="action">Browse Teams</a>
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>
`;

const userNavTemplate = () => html`
    <a href="/browse-teams" class="action">Browse Teams</a>
    <a href="/my-teams" class="action">My Teams</a>
    <a href="javascript:void(0)" class="action" @click=${onLogout}>Logout</a>
`;

export function showNav() {
    const userData = getUserData();

    if (userData) {
        renderNav(userNavTemplate());

    } else {
        renderNav(guestNavTemplate());
    }
}

async function onLogout() {
    logout();
    clearUserData();
    page.redirect('/');
    showNav();
}

