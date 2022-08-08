

export interface postI{
    
    postId: number|null,
    title: string|null,
    content: string|null,
    numberOfLikes: number|null,
    userLikesPost: userLikeI[]|null,
    comments: commentI[]|null


}

export interface postII{
    
    title: string|null,
    content: string|null,

}

export interface postIII{
    
    postId: number,
    title: string|null,
    content: string|null,

}





export interface commentI{

    commentId: number|null,
    commentContent: string,
    numberOfLikes: number|null,
    postIdpost: postI,
    userLikesComment: userLikeI|null,


}

export interface commentII{

    commentContent: string,
    postIdpost: {
        postId: number
    }
}

export interface commentIII{


    commentId: number,
    commentContent: string

}



export interface userLikeI{
    
}

