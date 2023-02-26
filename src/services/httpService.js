
import axios from 'axios';
import {toast} from 'react-toastify';
import { getJwt } from './authService';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    if(!expectedError)
        toast.error('Sorry! An unexpected error ocurred');
    
    return Promise.reject(error);    
});

axios.defaults.headers.common['x-auth-token'] = getJwt();

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}    

export default httpService;