export function getHeaders() {
    let user = JSON.parse(localStorage.getItem('user'));

    let config = {};
    if (user && user.token) {
        config.headers= { 'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + user.token };
    } else {
        config.headers = {'Content-Type': 'multipart/form-data'};
    }
    return config;
}