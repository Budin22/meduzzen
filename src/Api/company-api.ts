import { axiosInstance } from "./axios-instance";
import {
  AddNewCompanyBody,
  CompanyInfo,
  CompanySuccessfulRes,
  GetAllCompanySuccessfulRes,
  GetCompanySuccessfulRes,
} from "../Type/companyTypes";
import { generateUrlForCompanyWithId } from "../Util/generateUrlForCompanyWithId";
import {
  AvatarUpdateSuccessfulRes,
  DeleteSuccessfulRes,
} from "../Type/shareTypes";

export const getCompanyList = async (
  token: string,
  page: number,
  pageSize: number,
) => {
  const url = "/companies/?page=" + page + "&page_size=" + pageSize;
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res): Promise<GetAllCompanySuccessfulRes> => res.data);
};

export const getCompanyById = async (
  token: string,
  id: number,
): Promise<GetCompanySuccessfulRes> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const removeCompanyById = async (
  token: string,
  id: number,
): Promise<DeleteSuccessfulRes> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstance
    .delete(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const addCompany = async (
  token: string,
  company: AddNewCompanyBody,
): Promise<CompanySuccessfulRes> => {
  return axiosInstance
    .post("/company/", company, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => res.data);
};

export const updateCompanyInfo = async (
  companyInfo: CompanyInfo,
  token: string,
  id: number,
): Promise<CompanySuccessfulRes> => {
  const url = generateUrlForCompanyWithId(id) + "update_info/";
  return axiosInstance
    .put(url, companyInfo, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const updateCompanyVisible = async (
  isVisible: boolean,
  token: string,
  id: number,
): Promise<CompanySuccessfulRes> => {
  const url = generateUrlForCompanyWithId(id) + "update_visible/";
  return axiosInstance
    .put(url, isVisible, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const changeCompanyAvatar = async (
  avatar: FormData,
  token: string,
  id: number,
): Promise<AvatarUpdateSuccessfulRes> => {
  const url = generateUrlForCompanyWithId(id) + "update_avatar/";
  return axiosInstance
    .put(url, avatar, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
