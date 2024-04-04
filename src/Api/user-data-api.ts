import { AuthUser } from "../Type/userTypes";
import { axiosInstance } from "./axios-instance";
import { SuccessfulRes } from "../Type/shareTypes";

export const getCompanyList = async (
  token: string,
): Promise<SuccessfulRes<AuthUser>> => {
  return axiosInstance
    .get("/auth/me/", { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
