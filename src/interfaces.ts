

export interface postI{
    
    postId: number|null,
    title: string,
    content: string,
    numberOfLikes: number|null,
    userLikesPost: userLikeI[]|null,
    comments: commentI|null


}

export interface commentI{

    commentId: number|null,
    commentContent: string,
    numberOfLikes: number|null,
    post: postI,
    userLikesComment: userLikeI|null,


}



export interface userLikeI{
    
}

