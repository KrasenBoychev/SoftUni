
document.querySelectorAll("div[data-selection='section']").forEach(div => div.remove());

const nav = document.querySelector('nav'); 
nav.addEventListener('click', onNavigate);

const routes = {
    "/": () => console.log("home"),
    "/home": () => console.log("home"),
    "/dashboard": () => console.log("dashboard"),
    "/create": () => console.log("create"),
    "/login": () => console.log("login"),
    "/register": () => console.log("register"),
    "/details": () => console.log("details"),
    "/logout": () => console.log("logout"),
    "*": () => console.log("404 Page not found")
}

function updateNav() {
    const hasUser = "??"
    const guestA = document.querySelectorAll("div[data-permission='guest']");
    const userA = document.querySelectorAll("div[data-permission='user']");
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

function goTo(name) {
    const handler = routes(name);
    if (typeof(handler) != "function") {
         return routes["*"]();
    }
    handler(name)
}