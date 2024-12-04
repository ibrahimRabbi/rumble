import axios from 'axios'

const inostance = axios.create({
    baseURL: 'http://localhost:5000/api',
});

export default inostance