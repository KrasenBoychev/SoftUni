import { login } from "../data/users.js";
import { html, page, renderContent } from "../lib.js";
import { createSubmitHandler } from "../util.js";
import { showNav } from "./nav.js";

const loginTemplate = (onLogin) => html`
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
    </section>
`;

export function showLogin() {
    renderContent(loginTemplate(createSubmitHandler(onLogin)));
    showNav();
}

async function onLogin({email, password}) {
    if (!email || !password) {
        return alert('All fields are required!');
    }

    await login(email, password);

    page.redirect('/');
}