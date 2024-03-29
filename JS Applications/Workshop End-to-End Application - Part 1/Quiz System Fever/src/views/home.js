import { getLatestQuiz, getQuizzesCount } from "../data/quzzes.js";
import { html, render } from "../lib.js";

const homeTemplate = (latestQuiz, quizzesCount) => html`
<section id="welcome">

<div class="hero layout">
    <div class="splash right-col"><i class="fas fa-clipboard-list"></i></div>
    <div class="glass welcome">
        <h1>Welcome to Quiz Fever!</h1>
        <p>Home to ${quizzesCount} quizes in ?12? topics. <a href="/browse">Browse all quizes</a>.</p>
        <a class="action cta" href="/login">Sign in to create a quiz</a>
    </div>
</div>

<div class="pad-large alt-page">
    <h2>Our most recent quiz:</h2>

    <article class="preview layout">
        <div class="right-col">
            <a class="action cta" href="#">View Quiz</a>
        </div>
        <div class="left-col">
            <h3>${latestQuiz.title}</h3>
            <span class="quiz-topic">Topic: ${latestQuiz.topic}</span>
            <div class="quiz-meta">
                <span>${latestQuiz.questionCount} questions</span>
                <span>|</span>
                <span>Taken ?54? times</span>
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
    const latestQuizRequest = await getLatestQuiz(quizzesCount.count - 1);
    const latestQuiz = latestQuizRequest.results[0];

    render(homeTemplate(latestQuiz, quizzesCount.count));
}