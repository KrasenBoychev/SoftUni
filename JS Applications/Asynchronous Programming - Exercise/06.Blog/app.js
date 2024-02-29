function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const posts = document.getElementById('posts');

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    loadPostsBtn.addEventListener('click', loadPosts);

    const viewPostsBtn = document.getElementById('btnViewPost');
    viewPostsBtn.addEventListener('click', viewPosts);

    async function loadPosts() {
        try {
            const response = await fetch(postsURL);
            const data = await response.json();

            if (posts.children.length == 0) {

                for (const [key, info] of Object.entries(data)) {
                    const newOption = document.createElement('option');
                    newOption.value = key;
                    newOption.textContent = info.title;
                    posts.appendChild(newOption);
                }
            }

        } catch (error) {
            throw error;
        }
    }

    async function viewPosts() {
        try {
            const response = await fetch(commentsURL);
            const data = await response.json();

            const currPostId = posts.options[posts.selectedIndex].value;
            const currTitle = posts.options[posts.selectedIndex].text;

            const postDetails = document.getElementById('post-title');
            postDetails.textContent = currTitle;

            const postBody = document.getElementById('post-body');
            postBody.textContent = await getPostBody(currPostId);

            const postComments = document.getElementById('post-comments');
            postComments.textContent = '';

            for (const comment of Object.values(data)) {
                if (comment.postId == currPostId) {
                    const createListItem = document.createElement('li');
                    createListItem.id = comment.id;
                    createListItem.textContent = comment.text;

                    postComments.appendChild(createListItem);
                }
            }

        } catch (error) {
            throw error;
        }
    }

    async function getPostBody(id) {
        try {
            const response = await fetch(postsURL);
            const data = await response.json();

            const currId = Object.entries(data).find(post => post[0] === id);
            const bodyInfo = currId[1].body;

            return bodyInfo;

        } catch (error) {
            throw error;
        }
    }
}

attachEvents();