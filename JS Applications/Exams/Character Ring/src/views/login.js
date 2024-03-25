import { page, html, render } from "../lib.js";
import { login } from "../data/users.js";
import { createSubmitHandler, updateNav } from "../util.js";

const loginTemplate = (onLogin) => html`
  <section id="login">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
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
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`;

export function showLogin(ctx) {
    render(loginTemplate(createSubmitHandler(onLogin)));
}

async function onLogin({email, password}) {
    if (!email || !password) {
        return;
    };

    await login(email, password);
    updateNav();
    page.redirect('/');
}
