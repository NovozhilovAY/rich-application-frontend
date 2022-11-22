import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/AuthHeader";

export const RegistrationController = {
    registration
}

async function registration(login, password, firstName, lastName, country, city) {
    let result = {};
    let req = {login: login, password: password, firstName: firstName, lastName: lastName, country: country, city: city};
    let body = JSON.stringify(req);
    result = await HTTP.post('/api/registration', body, getHeaders()).then(
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
