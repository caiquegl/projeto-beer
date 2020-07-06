import axios from 'axios';

const api = axios.create({
    baseURL: 'https://server-beer.herokuapp.com',
});

export default api;