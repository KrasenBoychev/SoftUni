import { page } from "./lib.js";
import { loading } from "./middlewares/loading.js";
import { preload } from "./middlewares/preloadProfile.js";
import { renderer } from "./middlewares/render.js";
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
page(renderer(document.querySelector('main')));
page('/', loading(), showHome);
page('/profile', loading(), preload(), showProfile)
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


