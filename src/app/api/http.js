import axios from "axios";

const api = axios.create();
api.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

export default api;
