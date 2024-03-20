import { HealthCheck } from "../Hooks/queries/useHealthCheckQuery";
import { axiosInstance } from "./axios-instance";

export const getHealthCheck = async (): Promise<HealthCheck> => {
  return await axiosInstance
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err.message);
    });
};
