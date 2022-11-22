import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/AuthHeader";

export const UserController = {
    getUsers,
    getUsersCountry,
    getUsersCity,
    getUserById,
    updateUser
}

async function getUsers() {
    let result = {};
    result = await HTTP.get('/api/users/', getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}

async function getUsersCountry(country) {
    let result = {};
    result = await HTTP.get('/api/users/country/' + country, getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}

async function getUsersCity(city) {
    let result = {};
    result = await HTTP.get('/api/users/city/' + city, getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}

async function getUserById(id) {
    let result = {};
    result = await HTTP.get('/api/users/' + id, getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}

async function updateUser(userDto) {
    let result = {};
    console.log(userDto);
    result = await HTTP.put('/api/users/',userDto, getHeaders()).then(
        (resp) => {
            let profile = resp.data;
            localStorage.setItem('profile', JSON.stringify(profile));
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}