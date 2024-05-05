import { logout } from "../data/users.js";
import { getUserData, updateUserNav } from "../util.js";
import { page } from "../lib.js";

export function session() {
    document.getElementById("logoutBtn").addEventListener("click", onLogout);
    return function(ctx, next) {
        ctx.user = getUserData();
        next();
    };
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect("/");
}