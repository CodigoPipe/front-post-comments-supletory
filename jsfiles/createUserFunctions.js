import { createUserComment, createUserPost } from "./actions.js";
export function sendUserComment() {
    const userCommentId = document.querySelector("#create-user-input-commentId");
    const userName = document.querySelector("#create-user-input-username-comment");
    const userDni = document.querySelector("#create-user-input-dni-comment");
    const newUser = {
        userName: userName.value,
        dni: userDni.value,
        commentId: parseInt(userCommentId.value)
    };
    createUserComment(newUser).then(response => {
        console.log("succes");
    });
}
export function sendUserPost() {
    const userPostId = document.querySelector("#create-user-input-postId");
    const userName = document.querySelector("#create-user-input-username-post");
    const userDni = document.querySelector("#create-user-input-dni-post");
    const newUser = {
        userName: userName.value,
        dni: userDni.value,
        postIdpost: parseInt(userPostId.value)
    };
    createUserPost(newUser).then(response => {
        console.log("succes");
    });
}
