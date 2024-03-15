import axios from "axios";
import { HealthCheck } from "../Hooks/queries/useHealthCheckQuery";

const baseUrl = process.env.REACT_APP_BASEURL
  ? process.env.REACT_APP_BASEURL
  : "http://35.157.234.188";
const instance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

export const getHealthCheck = async (): Promise<HealthCheck> => {
  return await instance
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err.message);
    });
};
