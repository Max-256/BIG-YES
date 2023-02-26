
import config from '../config.json';
import http from './httpService';
const apiEndpoint = config.apiUrl + '/goods';

export function postProduct(product){
    return http.post(apiEndpoint, product);
}