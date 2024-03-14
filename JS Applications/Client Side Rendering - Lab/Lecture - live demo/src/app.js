import { loadTemplate, render } from "./renderer.js";

const views = {
    'home': {
        title: 'Templeating demo',
        content: 'This is the demo engine'
    },
    'catalog': {
        title: 'Catalog',
        content: 'Catalog page content'
    },
    'about': {
        title: 'About',
        content: 'Rendering templates since 2014'
    }
}

document.querySelector('nav').addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName == 'A') {
        show(event.target.id);
    }
})

const root = document.querySelector('main');

show('home');

async function show(id) {
    const context = views[id];
    const result = await render('layout', context);

    root.innerHTML = result;
}