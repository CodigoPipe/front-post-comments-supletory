

export interface postI{
    
    postId: number|null,
    title: string|null,
    content: string|null,
    numberOfLikes: number|null,
    users: userForPostI[]|null,
    comments: commentForPostI[]|null


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
    userLikesComment: userIPost|null,


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

//this one is created for postI
export interface commentForPostI{


    commentId: number,
    commentContent: string
    numberOfLikesComment: number|null,
    users: userForPostI[]|null

}



//USER INTERFACES


export interface userIComment{

    userName: string,
    dni: string,
    commentId: number

}

export interface userIPost{

    userName: string,
    dni: string,
    postIdpost: number

}

//this is created por the postI
export interface userForPostI{

    userId: number
    userName: string,
    dni: string,

}




