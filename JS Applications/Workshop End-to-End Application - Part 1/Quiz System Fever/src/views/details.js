import { getQuizById } from "../data/quizzes.js";
import { getSolutionsByQuizId } from "../data/solutions.js";
import { getUserName } from "../data/users.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";


const detailstemplate = (quiz, quizTimesTaken, ownerName, userData) => html`
            <section id="details">
                <div class="pad-large alt-page">
                    <article class="details">
                        <h1>${quiz.title}</h1>
                        <span class="quiz-topic">A quiz by ${userData? html`<a href="/profile">${ownerName}</a>` : html`${ownerName}`} on the topic of ${quiz.topic}</span>
                        <div class="quiz-meta">
                            <span>${quiz.questionCount} Questions</span>
                            <span>|</span>
                            <span>Taken ${quizTimesTaken} times</span>
                        </div>
                        <p class="quiz-desc">Test your knowledge of XML by completing this medium-difficulty quiz.
                            Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Aliquam recusandae corporis voluptatum quibusdam
                            maxime similique reprehenderit rem, officia vero at.</p>

                        <div>
                            ${userData ? html`<a class="cta action" href="/quiz/${quiz.objectId}">Begin Quiz</a>` : null}
                        </div>

                    </article>
                </div>
            </section>
`;

export async function showDetails(ctx) {
    const quizId = ctx.params.id;
    const quiz = await getQuizById(quizId);

    const ownerId = quiz.ownerId.objectId;
    const owner = await getUserName(ownerId);
    const ownerName = owner.username;
    
    const solutions = await getSolutionsByQuizId(quizId);
    const quizTimesTaken = solutions.results.length;

    const userData = await getUserData();

    render(detailstemplate(quiz, quizTimesTaken, ownerName, userData));
}
