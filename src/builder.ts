import { createComment, createPost, getAllPosts } from "./actions.js"
import { commentII, postI, postII } from "./interfaces.js"



export function createNewPost(){
    const postTitle = document.querySelector("#input-title-post") as  HTMLInputElement;
    const postContent = document.querySelector("#input-content-post") as  HTMLInputElement;


    const newPost: postII = {

        title: postTitle.value,
        content: postContent.value
      
    }

    createPost(newPost);
}

export function getAndCreatePosts(){
    
    getAllPosts().then(posts =>{
        createAllPosts(posts)
    })
}


function createAllPosts(posts: postI[]){

    posts.forEach(post =>{
      buildHtmlPost(post)
  })
}

function buildHtmlPost(post: postI){
   
    
    const createdPostDiv = document.querySelector('#post-created-div') as HTMLDivElement;



    const postWithCommentsContainer:HTMLDivElement = document.createElement('div');
    postWithCommentsContainer.className = 'post-created-son'
    
    const h2PostTitle: HTMLHeadElement = document.createElement('h2');
    h2PostTitle.className = "h2-titles"
    h2PostTitle.innerText = `${post.title}`

    const postContent: HTMLHeadElement = document.createElement('p');
    postContent.className = "p-post"
    postContent.innerText = `${post.content}`

    const h3PostId: HTMLHeadElement = document.createElement('h3');
    h3PostId.className = "h3-titles"
    h3PostId.innerText = `Post Id: ${post.postId}`

    const h3PostLikes: HTMLHeadElement = document.createElement('h3');
    h3PostLikes.className = "h3-titles"
    h3PostLikes.innerText = `Likes: ${post.numberOfLikes}`

   

    //divs that complement this main div created
    const contentOfPostDiv = document.createElement('div');
    contentOfPostDiv.className = 'content-post-created'
    
    contentOfPostDiv.append(h2PostTitle, postContent, h3PostId, h3PostLikes)
    postWithCommentsContainer.append(contentOfPostDiv);

    const createdPostCommentsDiv = document.createElement('div');
    createdPostCommentsDiv.className = 'comments-post-created'
    postWithCommentsContainer.append(createdPostCommentsDiv);


    //for each to create comments
    post.comments?.forEach(comment => {

        const singleCommentDiv:HTMLDivElement = document.createElement('div');
        singleCommentDiv.className = 'single-comment-div'

        const h2CommentId: HTMLHeadElement = document.createElement('h2');
        h2CommentId.className = "h2-id-comment"
        h2CommentId.innerText = `Comment: ${comment.commentId}`

        const commentContent: HTMLHeadElement = document.createElement('p');
        commentContent.className = "p-comment"
        commentContent.innerText = `${comment.commentContent}`

        const h3CommentLikes: HTMLHeadElement = document.createElement('h3');
        h3CommentLikes.className = "h3-titles"
        h3CommentLikes.innerText = `Likes: ${comment.numberOfLikes}`

        singleCommentDiv.append(h2CommentId, commentContent, h3CommentLikes )
        createdPostCommentsDiv.append(singleCommentDiv)

    })

    createdPostDiv.append(postWithCommentsContainer)

}


//create Comment

export function createNewComment(){

    const commentContentNew = document.querySelector("#input-comment-content") as  HTMLInputElement;
    const commentPostIdNew = document.querySelector("#input-comment-postid") as  HTMLInputElement;


    const newComment: commentII ={
        commentContent: commentContentNew.value,
        postIdpost: {
            postId: parseInt(commentPostIdNew.value)
        }
    }

    createComment(newComment)


}

