import axios from 'axios';

const api = axios.create({
    baseURL: 'https://sua-api-senai.com', // ajustar depois
});

export default api;