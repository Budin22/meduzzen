import axios from "axios";
import { baseUrl } from "../Config/base-url";

export const tokenStore = {
  token: "",
  setToken(token: string) {
    this.token = "Bearer " + token;
  },
  getToken() {
    return this.token;
  },
};

const axiosInstanceWithToken = axios.create({
  baseURL: baseUrl,
});
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    const token = tokenStore.getToken();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosInstanceWithToken };
