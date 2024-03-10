import { getUser } from "../utils/userUtils.js";

const BASE_URL = "http://localhost:3030/";

async function requester(method, url, data) {
    const url = BASE_URL + url;
    const userData = getUser;
    const option = {
        method,
        headers: {}
    }

    if (userData) {
        option.headers["X-authorization"] = userData.accessToken;
    }

    if (data) {
        option.headers["Content-type"] = "application/json";
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);
        if (!response.ok) {
             
        }
    } catch (error) {

    }
}