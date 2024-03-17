import { html, page, renderNav } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";
import { logout } from "../data/users.js";

const guestNavTemplate = () => html`
    <div id="guest">
                <a id="loginLink" href="/login">Login</a>
                <a id="registerLink" href="/register">Register</a>
            </div>
`;

const userNavTemplate = () => html`
            <div id="user">
                <a id="createLink" href="/create" >Create Furniture</a>
                <a id="profileLink" href="/my-furniture" >My Publications</a>
                <a id="logoutBtn" href="javascript:void(0)" @click=${onLogout}>Logout</a>
            </div>
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
    page.redirect('/catalog');
    showNav();
}

