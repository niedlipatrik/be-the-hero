import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.147:1900'
})

export default api;