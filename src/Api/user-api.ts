import {
  AuthUserSuccessfulRes,
  LoginUser,
  LoginUserSuccessfulRes,
  RegistrationUser,
  RegistrationUserSuccessfulRes,
} from "../Type/userTypes";
import { axiosInstance } from "./axios-instance";

export const createUser = async (
  user: RegistrationUser,
): Promise<RegistrationUserSuccessfulRes> => {
  return await axiosInstance.post("/user/", user).then((res) => res.data);
};

export const loginUser = async (
  user: LoginUser,
): Promise<LoginUserSuccessfulRes> => {
  return await axiosInstance.post("/auth/login", user).then((res) => res.data);
};

export const getUser = async (
  token: string,
): Promise<AuthUserSuccessfulRes> => {
  return await axiosInstance
    .get("/auth/me/", { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
