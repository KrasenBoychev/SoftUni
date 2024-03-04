const url = 'http://localhost:3030/jsonstore/collections/myboard/';

const formNewTopic = document.querySelector('main form');
formNewTopic.addEventListener('submit', createTopic);

const topicContainer = document.querySelector('.topic-container');

getTopics();

async function getTopics() {
    try {
        const response = await fetch(url + 'posts');
        const data = await response.json();

        topicContainer.textContent = "";

        Object.values(data).forEach(topic => {
            const divEl = document.createElement('div');
            divEl.className = "topic-name-wrapper";
            divEl.innerHTML += `
                <div class="topic-name">
                    <a href="theme-content.html" class="normal">
                    <h2>${topic.topicName}</h2>
                    </a>
                        <div class="columns">
                            <div>
                                <p>Date: <time>${topic.postedOn}</time></p>
                                <div class="nick-name">
                                    <p>Username: <span>${topic.username}</span></p>
                                </div>
                            </div>
                        </div>
                </div>
        `;
        topicContainer.appendChild(divEl);

        divEl.addEventListener('click', openTopic);
    });

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

export function openTopic() {
    
}


