import { hasUser } from "./src/utils/userUtils.js";
import { showRegisterView } from "./src/views/registerView.js";

document.querySelectorAll("div[data-selection='section']").forEach(div => div.remove());

const main = document.querySelector("main");
const nav = document.querySelector('nav'); 
nav.addEventListener('click', onNavigate);
updateNav();

const routes = {
    "/": () => console.log("home"),
    "/home": () => console.log("home"),
    "/dashboard": () => console.log("dashboard"),
    "/create": () => console.log("create"),
    "/login": () => console.log("login"),
    "/register": showRegisterView,
    "/details": () => console.log("details"),
    "/logout": () => console.log("logout"),
    "*": () => console.log("404 Page not found")
}

function updateNav() {
    const isUserExist = hasUser();
    const guestA = document.querySelectorAll("a[data-permission='guest']");
    const userA = document.querySelectorAll("a[data-permission='user']");
    if (isUserExist) {
        guestA.forEach(a => a.style.display = "none");
        userA.forEach(a => a.style.display = "block");
    } else {
        guestA.forEach(a => a.style.display = "block");
        userA.forEach(a => a.style.display = "none");
    }
}

function renderer(view) {
    main.replaceChildren(view);
}

function onNavigate(e) {
    e.preventDefault();
    let element = e.target;

    if (e.target.tagName !== "A" && e.target.tagName !== "IMG") {
        return;
    }
    if (e.target.tagName == "IMG") {
         element = e.target.parentElement;
    }

    const viewName = new URL(element.href).pathname;
    goTo(viewName);
}

let ctx = {
    render: renderer
}

function goTo(name) {
    const handler = routes[name];
    if (typeof(handler) !== "function") {
         return routes["*"]();
    }
    handler(ctx);
}