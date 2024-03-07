const url = 'http://localhost:3030/jsonstore/collections/myboard/';

const divContainer = document.querySelector(".container");

const homeLink = document.querySelector('nav a');
homeLink.addEventListener('click', homePage);

const mainElement = document.querySelector('main');
const formNewTopic = mainElement.querySelector('form');
formNewTopic.addEventListener('submit', createTopic);

const topicContainer = document.querySelector('.topic-container');

const divThemeContent = document.querySelector('.theme-content');
const divComments = document.querySelector('.comment');

function homePage() {
    divThemeContent.style.display = 'none';
    mainElement.style.display = 'block';
}

homePage();
getTopics();

async function getTopics() {
    try {
        const response = await fetch(url + 'posts');
        const data = await response.json();

        topicContainer.textContent = "";

        Object.values(data).forEach(topic => {
            const divWrapper = document.createElement('div');
            divWrapper.className = "topic-name-wrapper";

            const divTopicName = document.createElement('div');
            divTopicName.className = "topic-name";
            divWrapper.appendChild(divTopicName);

            const anchor = document.createElement('a');
            anchor.href = "#";
            anchor.className = "normal";

            divTopicName.appendChild(anchor);

            const h2Element = document.createElement('h2');
            h2Element.textContent = `${topic.topicName}`;
            h2Element.dataset.id = topic._id;

            anchor.appendChild(h2Element);

            divTopicName.innerHTML += `
                        <div class="columns">
                            <div>
                                <p>Date: <time>${topic.postedOn}</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>${topic.username}</span></p>
                                </div>
                            </div>
                        </div>
        `;
            topicContainer.appendChild(divWrapper);
        });

        const anchors = topicContainer.querySelectorAll('a h2');
        for (const anchor of anchors) {
            anchor.addEventListener('click', openTopic);
        };

    } catch (err) {
        alert(err.message);
    }
}


async function createTopic(event) {
    event.preventDefault();

    const btn = event.submitter.className;

    if (btn == 'public') {
        try {
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries());

            if (!data.topicName || !data.username || !data.postText) {
                return;
            }

            const currentDate = new Date();

            const bodyInfo = {
                topicName: data.topicName.trim(),
                username: data.username.trim(),
                postText: data.postText.trim(),
                postedOn: currentDate
            }

            const res = await fetch(url + 'posts', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(bodyInfo)
            });

            if (!res.ok) {
                const err = res.json();
                alert(err.message);
            }

            getTopics();

        } catch (err) {
            alert(err.message);
        }
    }

    formNewTopic.reset();
}

let userId = null;

async function openTopic(event) {
    event.preventDefault();

    mainElement.style.display = 'none';
    divThemeContent.style.display = 'block';
debugger
    const id = event.target.dataset.id;
    userId = id;

    try {
        const res = await fetch(url + 'posts' + '/' + userId);

        if (!res.ok) {
            const err = res.json();
            alert(err);
        }

        const data = await res.json();

        divComments.innerHTML = "";

        const h2Element = divThemeContent.querySelector('.theme-title h2');
        h2Element.textContent = data.topicName;

        loadComments(id);

        const commentFormRef = divThemeContent.querySelector('form');
        commentFormRef.addEventListener('submit', createComment);

    } catch (err) {
        alert(err);
    }

}

async function loadComments(userId) {
    const resComments = await fetch(url + "comments");
    const comments = resComments.json();
   
    if (Object.entries(comments)) {
        return;
    }

    let userComments = [];
    for (const comment of Object.values(comments)) {
        if (comment.userId == userId) {
            userComments.push(comment);
        }
    }

    // try {
    //     const res = await fetch(url + "comments" + "/" + userId);
    //     const data = res.json();

    //     if (!Object.entries(data)) {
    //         return;
    //     }

        if (!res.ok) {
            const err = res.json();
            alert(err);
        }

        for (const comment of userComments) {
            divComments.innerHTML += `
            <div id="user-comment">
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                        <div class="post-content">
                        <p>${comment.postText}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

    // } catch (err) {
    //     alert(err);
    // }
}

async function createComment(event) {
    event.preventDefault();

    try {
        const newFormData = new FormData(event.target);
        const commentData = Object.fromEntries(newFormData.entries());
        
        const date = new Date();

        const bodyInfo = {
           username: commentData.username,
           postText: commentData.postText,
           date,
           userId
        }

        const request = await fetch(url + "/" + "comments", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyInfo)
        });

        const divElement = document.createElement('div');
        divElement.id = "user-comment";

        divElement.innerHTML = `
        <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${commentData.username}</strong> commented on <time>${date}</time></p>
                <div class="post-content">
                <p>${commentData.postText}</p>
                </div>
            </div>
        </div>
        `;

        divComments.appendChild(divElement);

    } catch (err) {
        alert(err);
    }
}