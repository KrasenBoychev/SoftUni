import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { logout } from "./logout.js";
import { registerPage } from "./register.js";

export const endpoints = {
    movies: `http://localhost:3030/data/movies`,
    numberOfLikes: `http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count`,
    getLike: `http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22`,
    addLike: `http://localhost:3030/data/likes`,
    register: `http://localhost:3030/users/register`,
    login: `http://localhost:3030/users/login`,
    logout: 'http://localhost:3030/users/logout'
}

export const navElements = {
    movies: document.querySelector('nav a'),
    welcomeMsg: document.getElementById('welcome-msg'),
    logout: document.querySelectorAll('nav li a')[1],
    login: document.querySelectorAll('nav li a')[2],
    register: document.querySelectorAll('nav li a')[3]
}

homePage();

/**
 * @param {Array} currSectionId 
 */
export function showSection(currSectionId) {
    const sections = document.querySelectorAll('section');

    for (const section of sections) {
        if (currSectionId.includes(section.id)) {
            section.style.display = 'block';
            continue;
        } 
        section.style.display = 'none';
    }
};

navElements.movies.addEventListener('click', homePage)
navElements.register.addEventListener('click', registerPage);
navElements.login.addEventListener('click', loginPage);
navElements.logout.addEventListener('click', logout);