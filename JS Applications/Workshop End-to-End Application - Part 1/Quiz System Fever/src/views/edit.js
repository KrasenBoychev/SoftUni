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

        <div class="pad-large alt-page">


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

const editDeleteTemplate = () => html`
    <article class="editor-question">
                <div class="layout">
                    <div class="question-control">
                        <button class="input submit action"><i class="fas fa-edit"></i> Edit</button>
                        <button class="input submit action"><i class="fas fa-trash-alt"></i> Delete</button>
                    </div>
                    <h3>Question 2</h3>
                </div>
                <form>
                    <p class="editor-input">This is the second question.</p>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="0" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 0</span>
                    </div>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="1" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 1</span>
                    </div>
                    <div class="editor-input">
                        <label class="radio">
                            <input class="input" type="radio" name="question-2" value="2" disabled />
                            <i class="fas fa-check-circle"></i>
                        </label>
                        <span>Answer 2</span>
                    </div>
                </form>
            </article>
`;

const saveCancelTemplate = () => html`
    <article class="editor-question">
                <div class="layout">
                    <div class="question-control">
                        <button class="input submit action"><i class="fas fa-check-double"></i>
                            Save</button>
                        <button class="input submit action"><i class="fas fa-times"></i> Cancel</button>
                    </div>
                    <h3>Question 1</h3>
                </div>
                <form>
                    <textarea class="input editor-input editor-text" name="text"
                        placeholder="Enter question"></textarea>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="0" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-0" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="1" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-1" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">

                        <label class="radio">
                            <input class="input" type="radio" name="question-1" value="2" />
                            <i class="fas fa-check-circle"></i>
                        </label>

                        <input class="input" type="text" name="answer-2" />
                        <button class="input submit action"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    <div class="editor-input">
                        <button class="input submit action">
                            <i class="fas fa-plus-circle"></i>
                            Add answer
                        </button>
                    </div>
                </form>
            </article>
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

export async function showEdit(ctx) {
    const currentQuizId = ctx.params.id;
    quizId = currentQuizId;
    const quiz = await getQuizById(quizId);
    const uniqueTopics = await getUniqueTopics();

    render(editTemplate(quiz, uniqueTopics.results, createSubmitHandler(onSaveTitleTopic)));
}

async function onSaveTitleTopic({ title, topic }, form) {
    if (!title || !topic) {
        return alert('Title and Topic fields are required!')
    }

    const quiz = await getQuizById(quizId);
    const userData = getUserData();
    const pointer = { __type: "Pointer", className: "_User", objectId: userData.objectId};;

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