import { createNewComment, createNewPost, getAndCreatePosts } from "./builder.js";
import { sendUserComment, sendUserPost } from "./createUserFunctions.js";
import { deleteSelectedComment, deleteSelectedPost, deleteSelectedUser } from "./deleteFunctions.js";
import { updateSelectedComment, updateSelectedPost } from "./updateFunctions.js";
const createPostButton = document.querySelector("#get-all-post-button");
createPostButton.addEventListener("click", getAndCreatePosts);
const getPostButton = document.querySelector("#send-post-button");
getPostButton.addEventListener("click", createNewPost);
const createCommentButton = document.querySelector("#send-comment-button");
createCommentButton.addEventListener("click", createNewComment);
const deletePostButton = document.querySelector("#delete-post-button");
deletePostButton.addEventListener("click", deleteSelectedPost);
const deleteCommentButton = document.querySelector("#delete-comment-button");
deleteCommentButton.addEventListener("click", deleteSelectedComment);
// const getAllPatientsButton = document.querySelector("#get-patients-button") as HTMLButtonElement;
// getAllPatientsButton.addEventListener("click", getAndCreatePatients);
//puts
const updatePostButton = document.querySelector("#update-post-button");
updatePostButton.addEventListener("click", updateSelectedPost);
const updateCommentButton = document.querySelector("#update-comment-button");
updateCommentButton.addEventListener("click", updateSelectedComment);
//USER 
const getUserPostButton = document.querySelector("#create-user-post-button");
getUserPostButton.addEventListener("click", sendUserPost);
const getUserCommentButton = document.querySelector("#create-user-comment-button");
getUserCommentButton.addEventListener("click", sendUserComment);
const deleteUserButton = document.querySelector("#delete-user-button");
deleteUserButton.addEventListener("click", deleteSelectedUser);
