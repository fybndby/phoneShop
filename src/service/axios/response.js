
import axios from 'axios'

axios.interceptors.response.use(
    responseData => {
        // console.log(responseData);
        return responseData;
    },
    error => {
        // console.log(error);
        return Promise.reject(error);
    }
);