import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/AuthHeader";

export const UserController = {
    getUsers,
    getUsersCountry,
    getUsersCity
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