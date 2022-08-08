import { getAndCreatePosts } from "./builder.js";



const createPostButton = document.querySelector("#send-post-button") as HTMLButtonElement;
createPostButton.addEventListener("click", getAndCreatePosts);

// const getAllPatientsButton = document.querySelector("#get-patients-button") as HTMLButtonElement;
// getAllPatientsButton.addEventListener("click", getAndCreatePatients);
