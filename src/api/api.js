import axios from 'axios';

const api = axios.create({
    baseURL: 'https://server-beergl.herokuapp.com/',
});

export default api;
