import { getLatestQuiz, getQuizzesCount, getUniqueTopics } from "../data/quizzes.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";
import { getSolutionsByQuizId } from "../data/solutions.js";

const homeTemplate = (latestQuiz, timesTakenQuiz, quizzesCount, countTopics, userData) => html`
<section id="welcome">

<div class="hero layout">
    <div class="splash right-col"><i class="fas fa-clipboard-list"></i></div>
    <div class="glass welcome">
        <h1>Welcome to Quiz Fever!</h1>
        <p>Home to ${quizzesCount} quizes in ${countTopics} topics. <a href="/browse">Browse all quizes</a>.</p>

        ${!userData ? html`<a class="action cta" href="/login">Sign in to create a quiz</a>` : null}
        
    </div>
</div>

<div class="pad-large alt-page">
    <h2>Our most recent quiz:</h2>

    <article class="preview layout">
        <div class="right-col">
            <a class="action cta" href="/details/${latestQuiz.objectId}">View Quiz</a>
        </div>
        <div class="left-col">
            <h3>${latestQuiz.title}</h3>
            <span class="quiz-topic">Topic: ${latestQuiz.topic}</span>
            <div class="quiz-meta">
                <span>${latestQuiz.questionCount} questions</span>
                <span>|</span>
                <span>Taken ${timesTakenQuiz} times</span>
            </div>
        </div>
    </article>

    <div>
        <a class="action cta" href="/browse">Browse all quizes</a>
    </div>
</div>

</section>
`;

export async function showHome(ctx) {
    const quizzesCount = await getQuizzesCount();
    const quizzesOrderedByDate = await getLatestQuiz();
    const quizzesResults = quizzesOrderedByDate.results;
    const latestQuiz = quizzesResults[quizzesResults.length - 1];
    const uniqueTopics = await getUniqueTopics();
    const countTopics = uniqueTopics.results.length;

    const userData = getUserData();

    const solutionsResults = await getSolutionsByQuizId(latestQuiz.objectId);
    const timesTakenQuiz = solutionsResults.results.length;    

    render(homeTemplate(latestQuiz, timesTakenQuiz, quizzesCount.count, countTopics, userData));
}

