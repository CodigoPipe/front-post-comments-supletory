import { putComment, putPost } from "./actions.js";
export function updateSelectedPost() {
    const postIdUpdate = document.querySelector("#update-input-postId");
    const postTitleUpdate = document.querySelector("#update-input-postTitle");
    const postContentUpdate = document.querySelector("#update-input-postContent");
    const newPostUpdated = {
        postId: parseInt(postIdUpdate.value),
        title: postTitleUpdate.value,
        content: postContentUpdate.value
    };
    putPost(newPostUpdated).then(response => {
        console.log(response);
    });
}
export function updateSelectedComment() {
    const commentIdUpdate = document.querySelector("#update-input-commentId");
    const commentIdContent = document.querySelector("#update-input-commentContent");
    const newCommentUpdated = {
        commentId: parseInt(commentIdUpdate.value),
        commentContent: commentIdContent.value
    };
    putComment(newCommentUpdated).then(response => {
        console.log(response);
    });
}
