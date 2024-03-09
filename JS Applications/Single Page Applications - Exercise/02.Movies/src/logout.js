import { endpoints } from "./app.js";
import { loginPage } from "./login.js";

export async function logout() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    try {
        await fetch(endpoints.logout, {
            method: "GET",
            headers: {
                "X-Authorization": userData.accessToken
            }
        });

        localStorage.clear();
        loginPage();

    } catch (err) {
        alert(err.message);
    }
}