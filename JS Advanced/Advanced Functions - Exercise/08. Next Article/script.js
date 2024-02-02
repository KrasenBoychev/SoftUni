function getArticleGenerator(articles) {
    let divContent = document.getElementById('content');

    return function () {
        if (articles.length > 0) {
            let createArticle = document.createElement('article');
            createArticle.textContent = articles[0];
            articles.shift();
            return divContent.appendChild(createArticle);
        }
    }
}
