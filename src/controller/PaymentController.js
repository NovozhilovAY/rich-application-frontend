import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/AuthHeader";

export const PaymentController = {
    makePayment
}

async function makePayment(payment) {
    let result = {};
    result = await HTTP.post('/api/users/payment',payment, getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}