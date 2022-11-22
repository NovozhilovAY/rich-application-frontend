import HTTP from "@/utils/HTTP";
import {getHeaders} from "@/utils/FileHeader";

export const ImgController = {
    updateProfilePicture
}

async function updateProfilePicture(id,image) {
    let formData = new FormData();
    formData.append('file', image);
    let result = await HTTP.post('/api/img/update/'+id, formData, getHeaders()).then(
        (resp) => {
            return resp;
        }
    ).catch(error => {
        return error.response;
    })
    return result;
}
