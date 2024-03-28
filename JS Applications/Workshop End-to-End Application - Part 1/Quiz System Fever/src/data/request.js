import { clearUserData, getUserData } from "../util.js";

const host = 'https://parseapi.back4app.com';
const appId = 'fiPtFxwDTa9tCIC8AXdnyIa8hOPBFvkyhtDW7Rp4';
const apiKey = 'J1Nuil1pmS4iHolbjbESMkssW0GrQOtn5s7WjfIh';

async function request(method, url, data) {
   
    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey
        }
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    };

    const userData = getUserData();

    if (userData) {
        options.headers['X-Parse-Session-Token'] = userData.sessionToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            // if (response.status == 403) {
            //     clearUserData();
            // }

            const err = await response.json();
            throw new Error(err.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch(err) {
        // TODO Add custom error handling and visualization based on exam requirements
        alert(err.message);
        throw err;
    }
}


export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);

