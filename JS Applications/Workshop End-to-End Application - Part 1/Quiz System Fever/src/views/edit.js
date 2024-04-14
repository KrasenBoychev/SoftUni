import { deleteQuestion, getQuestionById, getQuizQuestions, updateQuestion } from "../data/questions.js";
import { getQuizById, getUniqueTopics, updateQuiz } from "../data/quzzes.js";
import { html, render, page, renderTemplate } from "../lib.js";
import { createSubmitHandler, getUserData } from "../util.js";
import { option } from "./catalog.js";

const editTemplate = (quiz, uniqueTopics, onSaveTitleTopic) => html`
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
        </div>

</section>
`;

const renderQuestions = (questions, template) => html`
    <div id="questions-box">
        ${questions.map(template)}
    </div>

    <article class="editor-question">
        <div class="editor-input">
            <button class="input submit action" @click=${onAddQuestion}>
                <i class="fas fa-plus-circle"></i>
                Add question
            </button>
        </div>
    </article>
`;

const editDeleteTemplate = () => {
    return html`
            <article class="editor-question">
            </article> `;
}

const articleTemplate = (question, index) => html`
    <div class="layout">
        <div class="question-control" data-id="${question.objectId}">
            <button class="input submit action" @click=${onEditQuestion} data-id="${index}"><i class="fas fa-edit"></i> Edit</button>
            <button class="input submit action" @click=${onDeleteQuestion}><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
        <h3>Question ${index}</h3>
    </div>
    <form>
        <p class="editor-input">${question.text}</p>
        ${question.answers.map(answer => divEditAnswers(answer, question.answers.indexOf(answer)))}
    </form>
`;

const divEditAnswers = (answer, index) => {
    return html`
        <div class="editor-input">
            <label class="radio">
                <input class="input" type="radio" name="question" value="${index}" disabled />
                <i class="fas fa-check-circle"></i>
            </label>
            <span>${answer}</span>
        </div>`
};

const saveCancelTemplate = (question, index) => html`
                <div class="layout">
                    <div class="question-control" data-id="${question.objectId}">
                        <button class="input submit action" @click=${onSaveQuestion} data-id="${index}"><i class="fas fa-check-double"></i>
                            Save</button>
                        <button class="input submit action" @click=${onCancelChanges} data-id="${index}"><i class="fas fa-times"></i> Cancel</button>
                    </div>
                    <h3>Question ${index}</h3>
                </div>
                <form data-id="${question.objectId}">
                    <textarea class="input editor-input editor-text" name="text"
                        placeholder="Enter question" .value=${question.text} data-id="${index}"></textarea>
                    <div id="answers-box">
                        ${question.answers.map(answer => divSaveAnswers(answer, question.answers.indexOf(answer)))}
                    </div>    
                    ${addAnswerTemplate()}
                </form>
`;

const divSaveAnswers = (answer, index) => html`
    <div class="editor-input" data-id="${index}">
        <label class="radio">
            <input class="input" type="radio" name="question-${index}" value="${index}" />
            <i class="fas fa-check-circle"></i>
        </label>
        <input class="input" type="text" name="answer-${index}" .value="${answer}" />
        <button class="input submit action" @click=${onDeleteAnswer} data-id="${index}"><i class="fas fa-trash-alt"></i></button>
    </div>
`;

const addAnswerTemplate = () => html`
    <div class="editor-input">
        <button class="input submit action" @click=${onAddAnswer}>
            <i class="fas fa-plus-circle"></i>
            Add answer
        </button>
    </div>
`;

let quizId = null;

export async function showEdit(ctx) {
    const currentQuizId = ctx.params.id;
    quizId = currentQuizId;
    const quiz = await getQuizById(quizId);
    const uniqueTopics = await getUniqueTopics();
    const questionsResults = await getQuizQuestions(quizId);
    const questions = questionsResults.results;

    render(editTemplate(quiz, uniqueTopics.results, questions, createSubmitHandler(onSaveTitleTopic)));
    renderArticles(questions);
}

function renderArticles(questions) {
    const divQuestion = document.getElementById('print-questions');
    renderTemplate(renderQuestions(questions, editDeleteTemplate), divQuestion);

    const articles = divQuestion.querySelectorAll('article');
    for (let i = 0; i < articles.length - 1; i++) {
        renderTemplate(articleTemplate(questions[i], i + 1), articles[i]);
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
        const index = e.target.dataset.id;

        const root = e.target.parentElement.parentElement.parentElement;
        renderTemplate(saveCancelTemplate(question, index), root);
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

        if (e.target.parentElement.dataset.id) {
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

            const index = e.target.dataset.id;
            const questionUpdated = await getQuestionById(questionId);

            renderTemplate(articleTemplate(questionUpdated, index), article);

        } else {
            const pointer = { __type: "Pointer", className: "Quizzes", objectId: quizId };
            const data = {
                text: textarea,
                answers: answersArray,
                correctIndex: "", //TODO
                quiz: pointer
            }

            //TODO
        }
    }
}

async function onCancelChanges(e) {
    if (e.target.tagName == 'BUTTON') {
        const questionId = e.target.parentElement.dataset.id;
        const question = await getQuestionById(questionId);
        const index = e.target.dataset.id;

        const root = e.target.parentElement.parentElement.parentElement;
        renderTemplate(articleTemplate(question, index), root);
    }
}

async function onDeleteAnswer(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        const divEditor = e.target.parentElement;

        if (!divEditor.dataset.id) {
            const divAnswers = e.target.parentElement.parentElement;
            divAnswers.removeChild(divEditor);
            return;
        }
        const form = e.target.parentElement.parentElement.parentElement;
        const questionId = form.dataset.id;
        const question = await getQuestionById(questionId);
        const answers = question.answers;

        const questionIndex = Number(e.target.dataset.id);
        answers.splice(questionIndex, 1);

        const pointer = { __type: "Pointer", className: "Quizzes", objectId: quizId };
        const data = {
            text: question.text,
            answers: answers,
            correctIndex: question.correctIndex,
            quiz: pointer
        }

        await updateQuestion(questionId, data);

        const index = form.querySelector('textarea').dataset.id;
        const questionUpdated = await getQuestionById(questionId);
        const article = form.parentElement;

        renderTemplate(saveCancelTemplate(questionUpdated, index), article);
    }
}

async function onAddAnswer(e) {
    e.preventDefault();
    if (e.target.tagName == 'BUTTON') {
        const divAnswers = document.getElementById('answers-box');

        if (!divAnswers.lastElementChild.dataset.id) {
            return;
        }

        let index = Number(divAnswers.lastElementChild.dataset.id) + 1;

        const divEditor = document.createElement('div');
        divEditor.className = 'editor-input';
        divEditor.innerHTML = `
            <label class="radio">
                <input class="input" type="radio" name="question-${index}" value="${index}" />
                <i class="fas fa-check-circle"></i>
            </label>
            <input class="input" type="text" name="answer-${index}" />
            <button class="input submit action" data-id="${index}"><i class="fas fa-trash-alt"></i></button>
        `;

        divAnswers.appendChild(divEditor);
        divAnswers.lastElementChild.querySelector('button').addEventListener('click', onDeleteAnswer);
    }
}


const testTemplate = (index) => html`
                <div class="layout">
                    <div class="question-control">
                        <button class="input submit action" @click=${onSaveQuestion} data-id="${index}"><i class="fas fa-check-double"></i>
                            Save</button>
                        <button class="input submit action" @click=${onCancelChanges} data-id="${index}"><i class="fas fa-times"></i> Cancel</button>
                    </div>
                    <h3>Question ${index}</h3>
                </div>
                <form>
                    <textarea class="input editor-input editor-text" name="text"
                        placeholder="Enter question" data-id="${index}"></textarea>
                    <div id="answers-box">
                        ${testAnswers(0, "")}
                    </div>   
                    ${testCorrectIndex()} 
                    ${addAnswerTemplate()}
                </form>
`;

const testAnswers = (index, answer) => html`
    <div class="editor-input" data-id="${index}">
        <label class="radio">
            <input class="input" type="radio" name="question-${index}" value="${index}" />
            <i class="fas fa-check-circle"></i>
        </label>
        <input class="input" type="text" name="answer-${index}" .value="${answer}" />
        <button class="input submit action" @click=${onDeleteAnswer} data-id="${index}"><i class="fas fa-trash-alt"></i></button>
    </div>
`;

const testCorrectIndex = () => html`
    <div>
        <label>
            Correct Answer:
            <input class="input" type="number" name="correct-answer" />
        </label>
    </div>
`;

async function onAddQuestion(e) {
    if (e.target.tagName == 'BUTTON') {
        const divQuestions = document.getElementById('questions-box');
        const lastIndex = divQuestions.lastElementChild.querySelector('button').dataset.id;
        const index = Number(lastIndex) + 1;

        const article = document.createElement('article');
        article.className = "editor-question";

        divQuestions.appendChild(article);
        renderTemplate(testTemplate(index), article);
    }
}
