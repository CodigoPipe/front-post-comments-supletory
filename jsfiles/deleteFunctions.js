import { deleteComment, deletePost, deleteUser } from "./actions.js";
export function deleteSelectedPost() {
    const postIdDelete = document.querySelector("#delete-input-post");
    deletePost(parseInt(postIdDelete.value)).then(response => {
        console.log("succes");
    });
}
export function deleteSelectedComment() {
    const commentIdDelete = document.querySelector("#delete-input-comment");
    deleteComment(parseInt(commentIdDelete.value)).then(response => {
        console.log("succes");
    });
}
export function deleteSelectedUser() {
    const userIdDelete = document.querySelector("#delete-user-input-userId");
    deleteUser(parseInt(userIdDelete.value)).then(response => {
        console.log("succes");
    });
}
// export function clearDivCreations(){
//     const creatorDiv = document.querySelector("#post-created-div") as HTMLDivElement
//     const list = document.getElementsByTagName("div")
//     creatorDiv.remove(l)
// }
