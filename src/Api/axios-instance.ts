import axios from "axios/index";
import { baseUrl } from "../Config/base-url";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});
