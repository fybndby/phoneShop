
import axios from 'axios'

axios.interceptors.request.use(
    config => {
        // console.log(config);
        return config;
    },
    error => {
        // console.log(error);
        return Promise.reject(error);
    }
);