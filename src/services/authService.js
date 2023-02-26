
import http from './httpService';
import config from '../config.json';
import jwtDecode from 'jwt-decode';
const apiEndPoint = config.apiUrl + "/auth";

export function login(email, password){
    return http.post(apiEndPoint, { email, password });
}

export function logout(){
    localStorage.removeItem("token");
}

export function getCurrentUser(){
    try {
        const jwt = localStorage.getItem("token");
        return jwtDecode(jwt);
    } catch (ex) {
        return null
    }
}

export function getJwt(){
    return localStorage.getItem("token");
}