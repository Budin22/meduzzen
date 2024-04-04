import { axiosInstance } from "./axios-instance";
import {
  AddNewCompanyBody,
  CompanyInfo,
  CompanyBodyRes,
  GetAllCompanyRes,
  CompanyRes,
} from "../Type/company-types";
import { generateUrlForCompanyWithId } from "../Util/generateUrlForCompanyWithId";
import { SuccessfulRes } from "../Type/share-types";

export const getCompanyList = async (
  token: string,
  page: number,
  pageSize: number,
) => {
  const url = "/companies/?page=" + page + "&page_size=" + pageSize;
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res): Promise<SuccessfulRes<GetAllCompanyRes>> => res.data);
};

export const getCompanyById = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<CompanyBodyRes>> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const removeCompanyById = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstance
    .delete(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const addCompany = async (
  token: string,
  company: AddNewCompanyBody,
): Promise<SuccessfulRes<CompanyRes>> => {
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
): Promise<SuccessfulRes<CompanyRes>> => {
  const url = generateUrlForCompanyWithId(id) + "update_info/";
  return axiosInstance
    .put(url, companyInfo, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const updateCompanyVisible = async (
  isVisible: boolean,
  token: string,
  id: number,
): Promise<SuccessfulRes<CompanyRes>> => {
  const url = generateUrlForCompanyWithId(id) + "update_visible/";
  return axiosInstance
    .put(url, isVisible, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const changeCompanyAvatar = async (
  avatar: FormData,
  token: string,
  id: number,
): Promise<SuccessfulRes<string>> => {
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
