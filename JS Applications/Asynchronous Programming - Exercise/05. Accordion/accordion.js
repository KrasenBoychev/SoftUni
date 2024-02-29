function solution() {
    const section = document.getElementById('main');

    const articlesURL = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const detailsURL = `http://localhost:3030/jsonstore/advanced/articles/details/`;

    getArticles();
    
    async function getArticles() {
        const response = await fetch(articlesURL);
        const data = await response.json();

        for (const article of data) {
            const [id, title] = Object.values(article);

            const details = await getDetails(id);

            const newArticle = createArticle(id, title, details);
            section.appendChild(newArticle);
        }
    }

    async function getDetails(id) {
        const response = await fetch(detailsURL + id);
        const data = await response.json();
        const content = data.content

        return content;
    }

    function createArticle(id, title, details) {
        const accordion = createElement('div', '', 'accordion');
        const head = createElement('div', '', 'head');
        const extra = createElement('div', '', 'extra');
        accordion.appendChild(head);
        accordion.appendChild(extra);

        const spanTag = createElement('span', title);
        const buttonTag = createElement('button', 'More', 'button');
        buttonTag.id = id;
        buttonTag.addEventListener('click', action)

        head.appendChild(spanTag);
        head.appendChild(buttonTag);

        const pTag = createElement('p', details);
        extra.appendChild(pTag);

        return accordion;
    }

    function action(event) {
        const btn =  event.target
        const divExtra = btn.parentElement.parentElement.children[1];

        if (btn.textContent == 'More') {
            divExtra.style.display = 'block';
            btn.textContent = 'Less';

        } else {
            divExtra.style.display = 'none';
            btn.textContent = 'More';
        }
    }

    function createElement(type, content, className) {
        let newEl = document.createElement(type);
        
        if (content) {
            newEl.textContent = content;
        }

        if (className) {
            newEl.className = className;
        }

        return newEl;
    }
}

solution();