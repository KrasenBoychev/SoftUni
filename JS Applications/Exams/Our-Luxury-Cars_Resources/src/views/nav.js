import { html, page, renderNav } from "../lib.js";
import { clearUserData, getUserData } from "../util.js";
import { logout } from "../data/users.js";

const guestNavTemplate = () => html`
          <div>
            <a href="/our-cars">Our Cars</a>
            <a href="/search">Search</a>
          </div>
           <!-- Guest users -->
           <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
`;

const userNavTemplate = () => html`
        <div>
            <a href="/our-cars">Our Cars</a>
            <a href="/search">Search</a>
          </div>

          <!-- Logged-in users -->
          <div class="user">
            <a href="/add-your-car">Add Your Car</a>
            <a href="javascript:void(0)" @click=${onLogout}>Logout</a>
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
    page.redirect('/');
    showNav();
}

