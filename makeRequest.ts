import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: import.meta.env.VITE_AUTHDOMAIN,
    headers: {
        Authorization: 'bearer ' + import.meta.env.VITE_APIKEY,
    },
});
