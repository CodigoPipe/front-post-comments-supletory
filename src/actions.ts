import { commentI, commentII, commentIII, postI, postII, postIII, userIComment, userIPost } from "./interfaces.js";




export async function getAllPosts() {

    const response:Response = await fetch('http://localhost:8080/api/v1/all/posts')
    const data:postI[] = await response.json()
  
    return data
  } 

  
  export async function createPost(post: postII){
  
    const response:Response = await fetch('http://localhost:8080/api/v1/create/post', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(post)
    })
  
    return response;
  }

  
  export async function deletePost(postId:number){
  
    const response:Response = await fetch(`http://localhost:8080/api/v1/delete/post/${postId}`, 
    {
      method: 'DELETE'
    })
  
    return response;
  }
  
//   export async function putSpeciality(speciality:specialityI){
//     const response:Response = await fetch('http://localhost:8080/api/v1/update/speciality', 
//     {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json' 
//       },
//       body: JSON.stringify(speciality)
//     })
  
//     return response;
//   }
  
  
  // methods for patients
  // export async function getAllComments() {
  //     const response:Response = await fetch('http://localhost:8080/api/v1/all/comments')
    
  //     const data:commentI[] = await response.json()
    
  //     return data
  //   } 
    
    export async function createComment(comment: commentII){
      const response:Response = await fetch('http://localhost:8080/api/v1/create/comment', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(comment)
      })
    
      return response;
    }
    
    export async function deleteComment(commentId:number){

      const response:Response = await fetch(`http://localhost:8080/api/v1/delete/comment/${commentId}`, 
      {
        method: 'DELETE'
      })
    
      return response;
    }
    
    //update functions

    export async function putPost(post:postIII){
      const response:Response = await fetch('http://localhost:8080/api/v1/update/post', 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(post)
      })
    
      return response;
    }

    export async function putComment(comment:commentIII){
      const response:Response = await fetch('http://localhost:8080/api/v1/update/comment', 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(comment)
      })
    
      return response;
    }


    //USER METHODS
    

    export async function createUserComment(user: userIComment){
      const response:Response = await fetch('http://localhost:8080/api/v1/create/user/comment', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user)
      })

      return response;
    }


    export async function createUserPost(user: userIPost){
      const response:Response = await fetch('http://localhost:8080/api/v1/create/user/post', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(user)
      })

      return response;
    }


    export async function deleteUser(userId:number){

      const response:Response = await fetch(`http://localhost:8080/api/v1/delete/comment/${userId}`, 
      {
        method: 'DELETE'
      })
    
      return response;
    }



