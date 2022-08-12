import { createComment, createPost, getAllPosts } from "./actions.js";
export function createNewPost() {
    const postTitle = document.querySelector("#input-title-post");
    const postContent = document.querySelector("#input-content-post");
    const newPost = {
        title: postTitle.value,
        content: postContent.value
    };
    createPost(newPost);
}
export function getAndCreatePosts() {
    const createdPostDiv = document.querySelector('#post-created-div');
    createdPostDiv.innerHTML = "";
    getAllPosts().then(posts => {
        createAllPosts(posts);
    });
}
function createAllPosts(posts) {
    posts.forEach(post => {
        buildHtmlPost(post);
    });
}
function buildHtmlPost(post) {
    var _a, _b;
    const createdPostDiv = document.querySelector('#post-created-div');
    const postWithCommentsContainer = document.createElement('div');
    postWithCommentsContainer.className = 'post-created-son';
    const h2PostTitle = document.createElement('h2');
    h2PostTitle.className = "h2-titles";
    h2PostTitle.innerText = `${post.title}`;
    const postContent = document.createElement('p');
    postContent.className = "p-post";
    postContent.innerText = `${post.content}`;
    const h3PostId = document.createElement('h3');
    h3PostId.className = "h3-titles";
    h3PostId.innerText = `Post Id: ${post.postId}`;
    const h3PostLikes = document.createElement('h3');
    h3PostLikes.className = "h3-titles";
    h3PostLikes.innerText = `Likes: ${post.numberOfLikes}`;
    //borrar hasta el siguiente comentario si no funciona
    const h2PostLikeSectionTitle = document.createElement('h2');
    h2PostLikeSectionTitle.className = "h2-titles";
    h2PostLikeSectionTitle.innerText = `Likes`;
    const contentOfPostDiv = document.createElement('div');
    contentOfPostDiv.className = 'content-post-created';
    contentOfPostDiv.append(h2PostTitle, postContent, h3PostId, h3PostLikes, h2PostLikeSectionTitle);
    postWithCommentsContainer.append(contentOfPostDiv);
    (_a = post.users) === null || _a === void 0 ? void 0 : _a.forEach(user => {
        const h3userId = document.createElement('h3');
        h3userId.className = "h3-titles";
        h3userId.innerText = `User Id: ${user.userId}`;
        const h3userName = document.createElement('h3');
        h3userName.className = "h3-titles";
        h3userName.innerText = `Likes: ${user.userName}`;
        const h3userDni = document.createElement('h3');
        h3userDni.className = "h3-titles";
        h3userDni.innerText = `DNI: ${user.dni}`;
        contentOfPostDiv.append(h3userId, h3userName, h3userDni);
    });
    //divs that complement this main div created
    const createdPostCommentsDiv = document.createElement('div');
    createdPostCommentsDiv.className = 'comments-post-created';
    postWithCommentsContainer.append(createdPostCommentsDiv);
    //for each to create comments
    (_b = post.comments) === null || _b === void 0 ? void 0 : _b.forEach(comment => {
        var _a;
        const singleCommentDiv = document.createElement('div');
        singleCommentDiv.className = 'single-comment-div';
        const h2CommentId = document.createElement('h2');
        h2CommentId.className = "h2-id-comment";
        h2CommentId.innerText = `Comment: ${comment.commentId}`;
        const commentContent = document.createElement('p');
        commentContent.className = "p-comment";
        commentContent.innerText = `${comment.commentContent}`;
        const h3CommentLikes = document.createElement('h3');
        h3CommentLikes.className = "h3-titles";
        h3CommentLikes.innerText = `Likes: ${comment.numberOfLikesComment}`;
        const h2CommentLikes = document.createElement('h2');
        h2CommentLikes.className = "h2-id-comment";
        h2CommentLikes.innerText = `Likes of comment`;
        singleCommentDiv.append(h2CommentId, commentContent, h3CommentLikes, h2CommentLikes);
        (_a = comment.users) === null || _a === void 0 ? void 0 : _a.forEach(user => {
            const h3userId = document.createElement('h3');
            h3userId.className = "h3-titles";
            h3userId.innerText = `User Id: ${user.userId}`;
            const h3userName = document.createElement('h3');
            h3userName.className = "h3-titles";
            h3userName.innerText = `Likes: ${user.userName}`;
            const h3userDni = document.createElement('h3');
            h3userDni.className = "h3-titles";
            h3userDni.innerText = `DNI: ${user.dni}`;
            singleCommentDiv.append(h3userId, h3userName, h3userDni);
        });
        createdPostCommentsDiv.append(singleCommentDiv);
    });
    createdPostDiv.append(postWithCommentsContainer);
}
//create Comment
export function createNewComment() {
    const commentContentNew = document.querySelector("#input-comment-content");
    const commentPostIdNew = document.querySelector("#input-comment-postid");
    const newComment = {
        commentContent: commentContentNew.value,
        postIdpost: {
            postId: parseInt(commentPostIdNew.value)
        }
    };
    createComment(newComment);
}
