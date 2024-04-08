import { HealthCheck } from "../Hooks/queries/useHealthCheckQuery";
import { axiosInstanceWithToken } from "./axios-instance-with-token";

export const getHealthCheck = async (): Promise<HealthCheck> => {
  return await axiosInstanceWithToken
    .get("/")
    .then((res) => res.data)
    .catch((err) => {
      throw Error(err.message);
    });
};
