import axios from "axios";
import { HealthCheck } from "../Hooks/queries/useHealthCheckQuery";
import { baseUrl } from "../Config/base-url";

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
