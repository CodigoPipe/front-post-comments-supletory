var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/all/posts');
        const data = yield response.json();
        return data;
    });
}
export function createPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/create/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        return response;
    });
}
export function deletePost(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:8080/api/v1/delete/post/${postId}`, {
            method: 'DELETE'
        });
        return response;
    });
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
export function createComment(comment) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/create/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
        return response;
    });
}
export function deleteComment(commentId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:8080/api/v1/delete/comment/${commentId}`, {
            method: 'DELETE'
        });
        return response;
    });
}
//update functions
export function putPost(post) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/update/post', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        return response;
    });
}
export function putComment(comment) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/update/comment', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
        return response;
    });
}
//USER METHODS
export function createUserComment(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/create/user/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response;
    });
}
export function createUserPost(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/v1/create/user/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return response;
    });
}
export function deleteUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:8080/api/v1/delete/user/${userId}`, {
            method: 'DELETE'
        });
        return response;
    });
}
