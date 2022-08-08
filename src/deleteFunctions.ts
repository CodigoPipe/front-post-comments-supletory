import { deleteComment, deletePost } from "./actions.js";


export function deleteSelectedPost(){
    
    const postIdDelete = document.querySelector("#delete-input-post") as  HTMLInputElement;

    deletePost(postIdDelete.value)

}

export function deleteSelectedComment(){
    
    const commentIdDelete = document.querySelector("#delete-input-comment") as  HTMLInputElement;

    deleteComment(commentIdDelete.value)

}