import { putComment, putPost } from "./actions.js";
import { commentIII, postIII } from "./interfaces.js";



export function updateSelectedPost(){
    
    const postIdUpdate = document.querySelector("#update-input-postId") as  HTMLInputElement;
    const postTitleUpdate = document.querySelector("#update-input-postTitle") as  HTMLInputElement;
    const postContentUpdate = document.querySelector("#update-input-postContent") as  HTMLInputElement;

    const newPostUpdated: postIII ={
        
        postId: parseInt(postIdUpdate.value),
        title: postTitleUpdate.value,
        content: postContentUpdate.value

    }

    putPost(newPostUpdated).then(response =>{
        console.log(response)
    })

}

export function updateSelectedComment(){
    
    const commentIdUpdate = document.querySelector("#update-input-commentId") as  HTMLInputElement;
    const commentIdContent = document.querySelector("#update-input-commentContent") as  HTMLInputElement;



    const newCommentUpdated: commentIII = {

        commentId: parseInt(commentIdUpdate.value),
        commentContent: commentIdContent.value
    }



    putComment(newCommentUpdated).then(response =>{
        console.log(response)
    })


}