function comments(input) {
    let users = {};
    let articles = {};

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command.startsWith(`user `)) {
            let username = command.split(` `).pop();
            if (username in users == false) {
                users[username] = {};
            }

        } else if (command.startsWith(`article `)) {
            let article = command.split(` `).pop();
            if (article in articles == false) {
                articles[article] = {};
            }

        } else if (command.includes(` posts on `)) {
            let [names, comment] = command.split(`: `);
            let [username, articleName] = names.split(` posts on `) 
            
            if (username in users && articleName in articles) {
                let [commentTitle, commentContent] = comment.split(`, `);

                let userNamesInArticle = Object.keys(articles[articleName]);
                if (userNamesInArticle.includes(username) == false) {
                    articles[articleName][username] = {};
                }
                articles[articleName][username][commentTitle] = commentContent;
            }
        }
    }

    let articlesEntries = Object.entries(articles);
    let sortedArticles = articlesEntries.sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);
    
    for (let article of sortedArticles) {
        console.log(`Comments on ${article[0]}`);
        
        let usersComments = Object.entries(article[1]);
        let sortedUsers = usersComments.sort((a, b) => a[0].localeCompare(b[0]));
        
        for (let userComment of sortedUsers) {
            let commentInfo = Object.entries(userComment[1]);

            for (let comment of commentInfo) {
            let [commentTitle, commentContent] = comment;
            console.log(`--- From user ${userComment[0]}: ${commentTitle} - ${commentContent}`);
            }
        }
    }
}
// comments(['user aUser123',
//     'someUser posts on someArticle: NoTitle, stupidComment',
//     'article Books',
//     'article Movies',
//     'article Shopping',
//     'user someUser', 
//     'user uSeR4', 
//     'user lastUser',
//     'uSeR4 posts on Books: I like books, I do really like them', 
//     'uSeR4 posts on Movies: I also like movies, I really do', 
//     'someUser posts on Shopping: title, I go shopping every day', 
//     'someUser posts on Movies: Like, I also like movies very much']);

comments(['user Mark', 
        'Mark posts on someArticle: NoTitle, stupidComment', 
        'article Bobby', 
        'article Steven', 
        'user Liam', 
        'user Henry', 
        'Mark posts on Bobby: Is, I do really like them', 
        'Mark posts on Steven: title, Run', 
        'someUser posts on Movies: Like',
        `user Krasen`,
        `Krasen posts on Steve: test, Sort`,
        `Mark posts on Steven: test, secondTime`
        ]);