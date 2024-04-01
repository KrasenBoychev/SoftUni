import { deleteQuestion, getQuestionById, getQuizQuestions, updateQuestion } from "../data/questions.js";
import { getQuizById, getUniqueTopics, updateQuiz } from "../data/quzzes.js";
import { html, render, page, renderTemplate } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";
import { option } from "./catalog.js";

const editTemplate = (quiz, uniqueTopics, questions, onSaveTitleTopic) => html`
<section id="editor">

        <header class="pad-large">
            <h1 id="heading-title">${quiz.title}</h1>
        </header>

        <div class="pad-large alt-page">
            <form @submit=${onSaveTitleTopic}>
                <label class="editor-label layout">
                    <span class="label-col">Title:</span>
                    <input class="input i-med" type="text" name="title"></label>
                <label class="editor-label layout">
                    <span class="label-col">Topic:</span>
                    <select class="input i-med" name="topic">
                        <option value="all">All Categories</option>
                        ${uniqueTopics.map((topic) => option(topic))}
                    </select>
                </label>
                <input class="input submit action" type="submit" value="Save">
            </form>
        </div>

        <header class="pad-large">
            <h2>Questions</h2>
        </header>

        <div id="print-questions" class="pad-large alt-page">
            
            ${questions.map(question => startingTemplate(question))}

            <article class="editor-question">
                <div class="editor-input">
                    <button class="input submit action">
                        <i class="fas fa-plus-circle"></i>
                        Add question
                    </button>
                </div>
            </article>

        </div>

</section>
`;

const startingTemplate = () => {
    return html`
            <article class="editor-question">
            </article> `;
}

const editDeleteTemplate = (question, questionNum) => html`
    <div class="layout">
            <div class="question-control" data-id="${question.objectId}">
                <button class="input submit action" @click=${onEditQuestion} data-id="${questionNum}"><i class="fas fa-edit"></i> Edit</button>
                <button class="input submit action" @click=${onDeleteQuestion}><i class="fas fa-trash-alt"></i> Delete</button>
            </div>
            <h3>Question ${questionNum}</h3>
        </div>
        <form>
            <p class="editor-input">${question.text}</p>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question" value="0" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>${question.answers[0]}</span>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question" value="1" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>${question.answers[1]}</span>
            </div>
            <div class="editor-input">
                <label class="radio">
                    <input class="input" type="radio" name="question" value="2" disabled />
                    <i class="fas fa-check-circle"></i>
                </label>
                <span>${question.answers[2]}</span>
            </div>
        </form>
`;

const saveCancelTemplate = (question, questionNum) => html`
                <div class="layout">
                    <div class="question-control" data-id="${question.objectId}">
                        <button class="input submit action" @click=${onSaveQuestion} data-id="${questionNum}"><i class="fas fa-check-double"></i>
                            Save</button>
                        <button class="input submit action" @click=${onCancelChanges} data-id="${questionNum}"><i class="fas fa-times"></i> Cancel</button>
                    </div>
                    <h3>Question ${questionNum}</h3>
                </div>
                <form>
                    <textarea class="input editor-input editor-text" name="text"
                        placeholder="Enter question" .value=${question.text}></textarea>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="0" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-0" .value="${question.answers[0]}" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="1" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-1" .value="${question.answers[1]}" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="2" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-2" .value="${question.answers[2]}" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">
                        <button class="input submit action">
                            <i class="fas fa-plus-circle"></i>
                            Add answer
                        </button>
                    </div>
                </form>
`;

const cannotEditTemplate = () => html`
     <article class="editor-question">
                <div class="layout">
                    <div class="question-control">
                        <button disabled class="input submit action"><i class="fas fa-check-double"></i>
                            Save</button>
                        <button disabled class="input submit action"><i class="fas fa-times"></i>
                            Cancel</button>
                    </div>
                    <h3>Question 1</h3>
                </div>
                <form>
                    <textarea disabled class="input editor-input editor-text" name="text"
                        placeholder="Enter question"></textarea>
                    <div class="editor-input">

                        <label class="radio">
                            <input disabled class="input" type="radio" name="question-1" value="0" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input disabled class="input" type="text" name="answer-0" />
                        <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input disabled class="input" type="radio" name="question-1" value="1" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input disabled class="input" type="text" name="answer-1" />
                        <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input disabled class="input" type="radio" name="question-1" value="2" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input disabled class="input" type="text" name="answer-2" />
                        <button disabled class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">
                        <button disabled class="input submit action">
                            <i class="fas fa-plus-circle"></i>
                            Add answer
                        </button>
                    </div>
                </form>
                <div class="loading-overlay working"></div>
            </article>
`;

let quizId = null;
let countQuestions = null;

export async function showEdit(ctx) {
    countQuestions = 0;

    const currentQuizId = ctx.params.id;
    quizId = currentQuizId;
    const quiz = await getQuizById(quizId);
    const uniqueTopics = await getUniqueTopics();
    const questions = await getQuizQuestions(quizId);

    render(editTemplate(quiz, uniqueTopics.results, questions.results, createSubmitHandler(onSaveTitleTopic)));
    renderQuestions(questions.results);
}

function renderQuestions(questions) {
    const articles = document.getElementById('print-questions').querySelectorAll('article');

    for (let i = 0; i < questions.length; i++) {
        countQuestions++;
        renderTemplate(editDeleteTemplate(questions[i], countQuestions), articles[i]);
    }
}

async function onSaveTitleTopic({ title, topic }, form) {
    if (!title || !topic) {
        return alert('Title and Topic fields are required!')
    }

    const quiz = await getQuizById(quizId);
    const userData = getUserData();
    const pointer = { __type: "Pointer", className: "_User", objectId: userData.objectId };;

    const data = {
        title: title,
        topic: topic,
        questionCount: quiz.questionCount,
        ownerId: pointer
    }

    await updateQuiz(quizId, data);

    const h1 = document.getElementById('heading-title');
    h1.textContent = title;
    form.reset();
}

async function onEditQuestion(e) {
    if (e.target.tagName == 'BUTTON') {
        const questionId = e.target.parentElement.dataset.id;
        const question = await getQuestionById(questionId);
        const questionNum = e.target.dataset.id;

        const root = e.target.parentElement.parentElement.parentElement;
        renderTemplate(saveCancelTemplate(question, questionNum), root);
    }
}

async function onDeleteQuestion(e) {
    if (e.target.tagName == 'BUTTON') {
        const choice = confirm('Are you sure?');

        if (choice) {
            const questionId = e.target.parentElement.dataset.id;
            await deleteQuestion(questionId);

            const article = e.target.parentElement.parentElement.parentElement;
            const divOverlay = document.createElement('div');
            divOverlay.classList.add('loading-overlay', 'working');
            article.appendChild(divOverlay);
        }
    }
}

async function onSaveQuestion(e) {
    if (e.target.tagName == 'BUTTON') {
        const article = e.target.parentElement.parentElement.parentElement;
        const form = article.querySelector('form');

        const textarea = form.querySelector('textarea').value;
        if (!textarea) {
            return alert('All fields are required!');
        }

        let answersArray = [];

        const inputs = form.querySelectorAll('input[type="text"]');
        for (const input of inputs) {
            if (!input.value) {
                answersArray = [];
                return alert('All fields are required!');
            } else {
                answersArray.push(input.value);
            }
        }

        const questionId = e.target.parentElement.dataset.id;
        const question = await getQuestionById(questionId);

        const pointer = { __type: "Pointer", className: "Quizzes", objectId: quizId };
        const data = {
            text: textarea,
            answers: answersArray,
            correctIndex: question.correctIndex,
            quiz: pointer
        }

        await updateQuestion(questionId, data);

        const questionNum = e.target.dataset.id;
        const questionUpdated = await getQuestionById(questionId);

        renderTemplate(editDeleteTemplate(questionUpdated, questionNum), article);
    }
}

async function onCancelChanges(e) {
    if (e.target.tagName == 'BUTTON') {
        const questionId = e.target.parentElement.dataset.id;
        const question = await getQuestionById(questionId);
        const questionNum = e.target.dataset.id;

        const root = e.target.parentElement.parentElement.parentElement;
        renderTemplate(editDeleteTemplate(question, questionNum), root);
    }
}

