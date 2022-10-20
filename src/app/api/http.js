import axios from "axios";

const api = axios.create();
api.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;

api.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem("token");
  return config;
});

export default api;
