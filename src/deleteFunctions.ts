import { deleteComment, deletePost } from "./actions.js";


export function deleteSelectedPost(){
    
    const postIdDelete = document.querySelector("#delete-input-post") as  HTMLInputElement;

    deletePost(parseInt(postIdDelete.value)).then(response =>{
        console.log("succes")
    })

}

export function deleteSelectedComment(){
    
    const commentIdDelete = document.querySelector("#delete-input-comment") as  HTMLInputElement;

    deleteComment(parseInt(commentIdDelete.value)).then(response =>{
        console.log("succes")
    })


}


// export function clearDivCreations(){

//     const creatorDiv = document.querySelector("#post-created-div") as HTMLDivElement

//     const list = document.getElementsByTagName("div")

//     creatorDiv.remove(l)



// }