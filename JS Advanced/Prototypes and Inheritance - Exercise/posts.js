function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
            this.print = [`Post: ${this.title}`, `Content: ${this.content}`];
        }
        toString() {
            return this.print.join(`\n`);
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            return this.comments.push(comment);
        }
        toString() {
            this.print.push(`Rating: ${this.likes - this.dislikes}`);
            if(this.comments.length > 0) {
                this.print.push(`Comments:`);
                for (const comment of this.comments) {
                    this.print.push(` * ${comment}`)
                }
            }
            return this.print.join(`\n`);
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = {};
            this.views[`views`] = views;
        }
        view() {
            this.views[`views`] += 1;
            return this;
        }
        toString() {
            this.print.push(`Views: ${this.views[`views`]}`);
            return this.print.join(`\n`);
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}


const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let blog = new classes.BlogPost("TestTitle", "TestContent", 5);
// blog.view();
// blog.view();
console.log(blog.toString());
