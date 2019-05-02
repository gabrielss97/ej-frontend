import axios from 'axios';

const api = axios.create({
    baseURL: "https://ej-backend.herokuapp.com"
});

export default api;