import {
  AuthUserSuccessfulRes,
  ChangePassword,
  DeleteUserSuccessfulRes,
  GetAllUserSuccessfulRes,
  LoginUser,
  LoginUserSuccessfulRes,
  RegistrationUser,
  UserAvatarUpdateSuccessfulRes,
  UserInfo,
  UserSuccessfulRes,
} from "../Type/userTypes";
import { axiosInstance } from "./axios-instance";
import { generateUrlForUserWithId } from "../Util/generateUrlForUserWithId";

export const createUser = async (
  user: RegistrationUser,
): Promise<UserSuccessfulRes> => {
  return axiosInstance.post("/user/", user).then((res) => res.data);
};

export const loginUser = async (
  user: LoginUser,
): Promise<LoginUserSuccessfulRes> => {
  return axiosInstance.post("/auth/login", user).then((res) => res.data);
};

export const getUser = async (
  token: string,
): Promise<AuthUserSuccessfulRes> => {
  return axiosInstance
    .get("/auth/me/", { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserList = async (
  token: string,
  page: number,
  pageSize: number,
) => {
  const url = "/users/?page=" + page + "&page_size=" + pageSize;
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res): Promise<GetAllUserSuccessfulRes> => res.data);
};

export const getUserById = async (
  token: string,
  id: number,
): Promise<AuthUserSuccessfulRes> => {
  const url = generateUrlForUserWithId(id);
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const removeUserById = async (
  token: string,
  id: number,
): Promise<DeleteUserSuccessfulRes> => {
  const url = generateUrlForUserWithId(id);
  return axiosInstance
    .delete(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const updateUserInfo = async (
  userInfo: UserInfo,
  token: string,
  id: number,
): Promise<UserSuccessfulRes> => {
  const url = generateUrlForUserWithId(id) + "update_info/";
  return axiosInstance
    .put(url, userInfo, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const changeUserPassword = async (
  newPassword: ChangePassword,
  token: string,
  id: number,
): Promise<UserSuccessfulRes> => {
  const url = generateUrlForUserWithId(id) + "update_password/";
  return axiosInstance
    .put(url, newPassword, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const changeAvatar = async (
  avatar: File,
  token: string,
  id: number,
): Promise<UserAvatarUpdateSuccessfulRes> => {
  const url = generateUrlForUserWithId(id) + "update_avatar/";
  return axiosInstance
    .put(
      url,
      { file: avatar },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      },
    )
    .then((res) => res.data);
};
