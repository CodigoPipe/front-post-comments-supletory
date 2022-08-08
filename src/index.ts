import { createNewComment, createNewPost, getAndCreatePosts } from "./builder.js";
import { deleteSelectedComment, deleteSelectedPost } from "./deleteFunctions.js";


const createPostButton = document.querySelector("#get-all-post-button") as HTMLButtonElement;
createPostButton.addEventListener("click", getAndCreatePosts);

const getPostButton = document.querySelector("#send-post-button") as HTMLButtonElement;
getPostButton.addEventListener("click", createNewPost);



const createCommentButton = document.querySelector("#send-comment-button") as HTMLButtonElement;
createCommentButton.addEventListener("click", createNewComment);





const deletePostButton = document.querySelector("#delete-post-button") as HTMLButtonElement;
deletePostButton.addEventListener("click", deleteSelectedPost);

const deleteCommentButton = document.querySelector("#delete-comment-button") as HTMLButtonElement;
deleteCommentButton.addEventListener("click", deleteSelectedComment);

// const getAllPatientsButton = document.querySelector("#get-patients-button") as HTMLButtonElement;
// getAllPatientsButton.addEventListener("click", getAndCreatePatients);
