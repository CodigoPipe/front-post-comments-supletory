import { createNewComment, createNewPost, getAndCreatePosts } from "./builder.js";
import { sendUserComment, sendUserPost } from "./createUserFunctions.js";
import { deleteSelectedComment, deleteSelectedPost, deleteSelectedUser } from "./deleteFunctions.js";
import { updateSelectedComment, updateSelectedPost } from "./updateFunctions.js";


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


//puts

const updatePostButton = document.querySelector("#update-post-button") as HTMLButtonElement;
updatePostButton.addEventListener("click", updateSelectedPost);

const updateCommentButton = document.querySelector("#update-comment-button") as HTMLButtonElement;
updateCommentButton.addEventListener("click", updateSelectedComment);


//USER 

const getUserPostButton = document.querySelector("#create-user-post-button") as HTMLButtonElement;
getUserPostButton.addEventListener("click", sendUserPost);

const getUserCommentButton = document.querySelector("#create-user-comment-button") as HTMLButtonElement;
getUserCommentButton.addEventListener("click", sendUserComment);

const deleteUserButton = document.querySelector("#delete-user-button") as HTMLButtonElement;
deleteUserButton.addEventListener("click", deleteSelectedUser);
