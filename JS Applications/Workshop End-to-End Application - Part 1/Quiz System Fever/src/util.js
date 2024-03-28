export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
    updateUserNav();
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
    updateUserNav();
}

export function updateUserNav() {
    const guestNav = document.getElementById("guest-nav");
    const userNav = document.getElementById("user-nav");
    const user = getUserData();
    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
    } else {
        guestNav.style.display = 'inline-block';
        userNav.style.display = 'none';
    }
}

// TODO Add custom validation if needed 
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = [...formData.entries()].map(([k, v]) => [k, v.toString().trim()]);

        callback(Object.fromEntries(data), event.target);
    }
}