import { html} from "../../lib.js";
import { option } from "../catalog.js";

// Works perfectly
const editTemplate = (uniqueTopics, onSaveTitleTopic, createNewTopic, quiz) => html`
    <section id="editor">
        <header id="edit-heading" class="pad-large">
        </header>
        <div class="pad-large alt-page">
            <form @submit=${onSaveTitleTopic} data-id="${quiz? quiz.objectId : ""}">
                    <label class="editor-label layout">
                        <span class="label-col">Title:</span>
                        <input class="input i-med" type="text" name="title"></label>
                    <label class="editor-label layout">
                        <span class="label-col">Topic:</span>
                        <select id="categories" class="input i-med" name="topic" @change=${createNewTopic}>
                            <option value="all">All Categories</option>
                            <option value="new-topic">--- Create new topic ---</option>
                            ${uniqueTopics.map((topic) => option(topic))}
                        </select>
                    </label>
                    <label class="editor-label layout" id="newTopic">
                        <span class="label-col">New Topic:</span>
                        <input class="input i-med" type="text" name="new-topic">
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

// Works perfectly
const headingTemplate = (title, topic) => html`
    <h1 id="heading-title">Title: ${title}</h1>
    <h4>Topic: ${topic}</h4>
`;

// Works perfectly
const renderQuestions = (onAddQuestion, questions, template) => html`
    <div id="questions-box">
        ${questions? questions.map(template) : ""}
    </div>
    <article class="editor-question">
        <div class="editor-input">
            <button id="add-question-btn" class="input submit action" @click=${onAddQuestion}>
                <i class="fas fa-plus-circle"></i>
                Add question
            </button>
        </div>
    </article>
`;

// Works perfectly
const editDeleteTemplate = () => {
    return html`
            <article class="editor-question">
            </article> `;
}

// Works perfectly
const articleTemplate = (question, index, onEditQuestion, onDeleteQuestion) => html`
    <div class="layout" data-id="${question.objectId}">
        <div class="question-control" data-id="${index}">
            <button class="input submit action" @click=${onEditQuestion}><i class="fas fa-edit"></i> Edit</button>
            <button class="input submit action" @click=${onDeleteQuestion}><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
        <h3>Question ${index}</h3>
    </div>
    <form>
        <p class="editor-input">${question.text}</p>
        ${question.answers.map(answer => divEditAnswers(answer, question.answers.indexOf(answer)))}
    </form>
`;

// Works perfectly
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

// Works perfectly
const saveCancelTemplate = (index, onSaveQuestion, onCancelChanges, onDeleteAnswer, onAddAnswer, question) => html`
                <div class="layout" data-id="${question? question.objectId : ""}">
                    <div class="question-control" data-id="${index}">
                        <button class="input submit action" @click=${onSaveQuestion}><i class="fas fa-check-double"></i>
                            Save</button>
                        <button class="input submit action" @click=${onCancelChanges}><i class="fas fa-times"></i>Cancel</button>
                    </div>
                    <h3>Question ${index}</h3>
                </div>
                <form>
                    <textarea class="input editor-input editor-text" name="text"
                        placeholder="Enter question" .value=${question? question.text : ""}></textarea>
                    <div id="answers-box">
                        ${question? question.answers.map(answer => divSaveAnswers(question.answers.indexOf(answer), onDeleteAnswer, answer)) : 
                            divSaveAnswers(index, onDeleteAnswer)
                        }
                    </div>    
                    ${addAnswerTemplate(onAddAnswer)}
                </form>
`;

// Works perfectly
const divSaveAnswers = (index, onDeleteAnswer, answer = "") => html`
    <div class="editor-input" data-id="${index}">
        <label class="radio">
            <input class="input" type="radio" name="question-${index}" value="${index}" />
            <i class="fas fa-check-circle"></i>
        </label>
        <input class="input" type="text" name="answer-${index}" .value="${answer}" />
        <button class="input submit action" @click=${onDeleteAnswer}><i class="fas fa-trash-alt"></i></button>
    </div>
`;

// Works perfectly
const addAnswerTemplate = (onAddAnswer) => html`
    <div class="editor-input">
        <button class="input submit action" @click=${onAddAnswer}>
            <i class="fas fa-plus-circle"></i>
            Add answer
        </button>
    </div>
`;

// const testTemplate = (index, onSaveQuestion, onCancelChanges, onDeleteAnswer) => html`
//                 <div class="layout">
//                     <div class="question-control">
//                         <button class="input submit action" @click=${onSaveQuestion} data-id="${index}"><i class="fas fa-check-double"></i>
//                             Save</button>
//                         <button class="input submit action" @click=${onCancelChanges} data-id="${index}"><i class="fas fa-times"></i>Cancel</button>
//                     </div>
//                     <h3>Question ${index}</h3>
//                 </div>
//                 <form>
//                     <textarea class="input editor-input editor-text" name="text"
//                         placeholder="Enter question" data-id="${index}"></textarea>
//                     <div id="answers-box">
//                         ${testAnswers(0, "", onDeleteAnswer)}
//                     </div>   
//                     ${addAnswerTemplate()}
//                 </form>
// `;

const newAnswerTemplate = (index, onDeleteAnswer) => html`
    <div class="editor-input" data-id="${index}">
        <label class="radio">
            <input class="input" type="radio" name="question-${index}" />
            <i class="fas fa-check-circle"></i>
        </label>
        <input class="input" type="text" name="answer-${index}" />
        <button class="input submit action" @click=${onDeleteAnswer}><i class="fas fa-trash-alt"></i></button>
    </div>
`;

export {
    editTemplate,
    headingTemplate,
    renderQuestions,
    editDeleteTemplate,
    articleTemplate,
    divEditAnswers,
    saveCancelTemplate,
    divSaveAnswers,
    addAnswerTemplate,
    //testTemplate,
    newAnswerTemplate
}