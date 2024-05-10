import { loadingPage } from "../middlewares/loading.js";
import { clearUserData, getUserData } from "../util.js";

const host = 'https://parseapi.back4app.com';
const appId = 'fiPtFxwDTa9tCIC8AXdnyIa8hOPBFvkyhtDW7Rp4';
const apiKey = 'J1Nuil1pmS4iHolbjbESMkssW0GrQOtn5s7WjfIh';
const masterKey = '0QdBlZhFD5Km7PyCerxOCqZxiCV648i3GdoeknV1';

async function request(method, url, data) {
   //loadingPage('attach'); 
   // prevention from sending the same request more than one time (unfortunately after a double click on "edit", when correcting a question, it bugs)

    const options = {
        method,
        headers: {
            'X-Parse-Application-Id': appId,
            'X-Parse-JavaScript-Key': apiKey,
            'X-Parse-Master-Key': masterKey
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

           // loadingPage('remove');
            throw new Error(err.message);
        }

        if (response.status == 204) {
          //  loadingPage('remove');
            return response;
        } else {
          //  loadingPage('remove');
            return response.json();
        }

    } catch(err) {
        // TODO Add custom error handling and visualization based on exam requirements
        alert(err.message);

       // loadingPage('remove');
        throw err;
    }
}


export const get = (url) => request('get', url);
export const post = (url, data) => request('post', url, data);
export const put = (url, data) => request('put', url, data);
export const del = (url) => request('delete', url);

