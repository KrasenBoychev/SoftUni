import { endpoints, navElements } from "./app.js";
import { homePage } from "./home.js";

export async function validate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.email = data.email.trim();
    data.password = data.password.trim();

    if (!data.email || !data.password) {
        alert('The input fields must be filled!');
        return;
    }

    if (data.password.length < 6) {
        alert('The password must be at least 6 characters!');
        return;
    }

    let url;

    if (data.repeatPassword) {
        data.repeatPassword = data.repeatPassword.trim();

        if (!data.repeatPassword) {
            return;
        }

        if (data.password != data.repeatPassword) {
            alert('The password and the repeat password fields must match!');
            return;
        }

        url = endpoints.register;

    } else {
        url = endpoints.login;
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email: data.email, password: data.password })
        });

        if (!response) {
            const err = response.json();
            alert(err.message);
        }

        const userData = await response.text();
        localStorage.setItem('userData', userData);

    } catch (err) {
        alert(err.message);
        return;
    }

    event.target.reset();

    homePage();
}