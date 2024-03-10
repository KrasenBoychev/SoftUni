function getUser() {
    return JSON.parse(sessionStorage.getItem("userData"));
}

function hasUser() {
    return !!getUser();
}

export {
    getUser,
    hasUser
}