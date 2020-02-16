import axios from 'axios';

const api = axios.create({
    baseURL: 'http://avainformatica-io.umbler.net' 
});
 
export default api;