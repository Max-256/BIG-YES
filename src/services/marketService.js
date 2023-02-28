
import config from '../config.json';
import http from './httpService';
const apiEndpoint = config.apiUrl + '/goods';

export function postProduct(product){
    return http.post(apiEndpoint, product);
}

export function getProducts(){
    return http.get(apiEndpoint);
}

export function getProduct(productId){
    return http.get(apiEndpoint + "/" + productId);
} 

export function deleteProduct(productId){
    return http.delete(apiEndpoint + "/" + productId);
}