import {
  AuthUser,
  ChangePassword,
  GetAllUserRes,
  LoginUser,
  LoginUserRes,
  RegistrationUser,
  UserInfo,
  UserRes,
} from "../Type/user-types";
import { axiosInstanceWithToken } from "./axios-instance-with-token";
import { generateUrlForUserWithId } from "../Util/generateUrlForUserWithId";
import { SuccessfulRes } from "../Type/share-types";

export const createUser = async (
  user: RegistrationUser,
): Promise<SuccessfulRes<UserRes>> => {
  return axiosInstanceWithToken.post("/user/", user).then((res) => res.data);
};

export const loginUser = async (
  user: LoginUser,
): Promise<SuccessfulRes<LoginUserRes>> => {
  return axiosInstanceWithToken
    .post("/auth/login", user)
    .then((res) => res.data);
};

export const getUser = async (): Promise<SuccessfulRes<AuthUser>> => {
  return axiosInstanceWithToken.get("/auth/me/").then((res) => res.data);
};

export const getUserList = async (page: number, page_size: number) => {
  const url = "/users/";
  return axiosInstanceWithToken
    .get(url, {
      params: {
        page,
        page_size,
      },
    })
    .then((res): Promise<SuccessfulRes<GetAllUserRes>> => res.data);
};

export const getUserById = async (
  id: number,
): Promise<SuccessfulRes<AuthUser>> => {
  const url = generateUrlForUserWithId(id);
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const removeUserById = async (
  id: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForUserWithId(id);
  return axiosInstanceWithToken.delete(url).then((res) => res.data);
};

export const updateUserInfo = async (
  userInfo: UserInfo,
  id: number,
): Promise<SuccessfulRes<UserRes>> => {
  const url = generateUrlForUserWithId(id) + "update_info/";
  return axiosInstanceWithToken.put(url).then((res) => res.data);
};

export const changeUserPassword = async (
  newPassword: ChangePassword,
  id: number,
): Promise<SuccessfulRes<UserRes>> => {
  const url = generateUrlForUserWithId(id) + "update_password/";
  return axiosInstanceWithToken.put(url, newPassword).then((res) => res.data);
};

export const changeAvatar = async (
  avatar: FormData,
  id: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForUserWithId(id) + "update_avatar/";
  return axiosInstanceWithToken
    .put(url, avatar, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
