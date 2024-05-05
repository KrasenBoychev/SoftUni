import { logout } from "./data/users.js";
import { page, html, render} from "./lib.js";
import { session } from "./middlewares/session.js";
import { updateUserNav } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showQuizPage } from "./views/changeQuizPage.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showProfile } from "./views/profile.js";
import { showQuizResults } from "./views/quiz-results.js";
import { openQuiz } from "./views/quiz.js";
import { showRegister } from "./views/register.js";



page(session());
page('/', showHome);
page('/profile', showProfile)
page('/login', showLogin);
page('/register', showRegister);
page('/browse', showCatalog);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/quiz/:id', openQuiz);
page('/quiz/:id/:qId', showQuizPage);
page('/results/:id', showQuizResults);
page('/edit/:id', showEdit);

page.start();
updateUserNav();

// document.getElementById('logoutBtn').addEventListener('click', async () => {
//     logout();
//     updateUserNav();
//     page.redirect('/')
// });

function loading() {
    render(loadingTemplate());
}

export const loadingTemplate = () => html`
    <div class="pad-large alt-page async">
          <div class="sk-cube-grid">
              <div class="sk-cube sk-cube1"></div>
              <div class="sk-cube sk-cube2"></div>
              <div class="sk-cube sk-cube3"></div>
              <div class="sk-cube sk-cube4"></div>
              <div class="sk-cube sk-cube5"></div>
              <div class="sk-cube sk-cube6"></div>
              <div class="sk-cube sk-cube7"></div>
              <div class="sk-cube sk-cube8"></div>
              <div class="sk-cube sk-cube9"></div>
          </div>
    </div>
`;
