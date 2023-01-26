import axios from "axios";

const base_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: base_URL,
});

axiosInstance.interceptors.request.use(
  (conf) => {
    // conf.headers["Authorization"] = `Bearer {tokenValue}`;
    return conf;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;