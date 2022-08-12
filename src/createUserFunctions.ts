import { createUserComment, createUserPost } from "./actions.js";
import { userIComment, userIPost } from "./interfaces.js";


export function sendUserComment(){

    const userCommentId = document.querySelector("#create-user-input-commentId") as  HTMLInputElement;
    const userName = document.querySelector("#create-user-input-username-comment") as  HTMLInputElement;
    const userDni = document.querySelector("#create-user-input-dni-comment") as  HTMLInputElement;

    const newUser: userIComment = {
        userName: userName.value,
        dni: userDni.value,
        commentId: parseInt(userCommentId.value)
    }

    createUserComment(newUser).then(response =>{
        console.log("succes")
    })

}




export function sendUserPost(){

    const userPostId = document.querySelector("#create-user-input-postId") as  HTMLInputElement;
    const userName = document.querySelector("#create-user-input-username-post") as  HTMLInputElement;
    const userDni = document.querySelector("#create-user-input-dni-post") as  HTMLInputElement;


    const newUser: userIPost = {

        userName: userName.value,
        dni: userDni.value,
        postIdpost: parseInt(userPostId.value)
        
    }


    createUserPost(newUser).then(response =>{
        console.log("succes")
    })

    
}