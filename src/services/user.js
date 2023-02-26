
import http from './httpService';
import config from '../config.json';
const apiEndPoint = config.apiUrl + "/user";

export function register(user) {
    return http.post(apiEndPoint, {
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        location: user.location,
        password: user.password
    });
}

