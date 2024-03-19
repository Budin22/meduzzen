import { baseUrl } from "../Config/base-url";
import {
  AuthUserSuccessfulRes,
  LoginUser,
  LoginUserSuccessfulRes,
  RegistrationUser,
  RegistrationUserSuccessfulRes,
} from "../Type/userTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
});

export const createUser = async (
  user: RegistrationUser,
): Promise<RegistrationUserSuccessfulRes> => {
  return await instance.post("/user/", user).then((res) => res.data);
};

export const loginUser = async (
  user: LoginUser,
): Promise<LoginUserSuccessfulRes> => {
  return await instance.post("/auth/login", user).then((res) => res.data);
};

export const getUser = async (
  token: string,
): Promise<AuthUserSuccessfulRes> => {
  return await instance
    .get("/auth/me/", { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
