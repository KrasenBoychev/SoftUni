import { clearUserData, setUserData } from "../util.js";
import { get, post } from "./request.js"

// TODO Adapt user profile to exam requirements (identity, extra properties, etc.)

const endpoints = {
    login: '/login',
    register: '/users',
    logout: '/logout',
};

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

export async function register(username, email, password) {
    const result = await post(endpoints.register, { username, email, password });
    setUserData(result);
}

export async function logout() {
    const promise = post(endpoints.logout);
    
    await promise;
    clearUserData();
}