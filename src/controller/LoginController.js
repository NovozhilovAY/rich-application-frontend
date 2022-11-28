import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/AuthHeader";

export const LoginController = {
    login,
    logout,
    isUserLoggedIn
}

async function login(username, password) {
    let result = {};
    let req = {username: username, password: password};
    let body = JSON.stringify(req);
    result = await HTTP.post('/api/auth/login', body, getHeaders()).then(
        (resp) => {
            let user = resp.data;
            localStorage.setItem('user', JSON.stringify(user));
            HTTP.get('api/users/user-name/'+ user.username, getHeaders()).then(
                (resp) => {
                    let profile = resp.data;
                    localStorage.setItem('profile', JSON.stringify(profile));
                }
            )
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}

function logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('profile');
}

function isUserLoggedIn(){
    return localStorage.getItem('user') !== null;
}