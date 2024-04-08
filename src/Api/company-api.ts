import { axiosInstanceWithToken } from "./axios-instance-with-token";
import {
  AddNewCompanyBody,
  CompanyInfo,
  CompanyBodyRes,
  GetAllCompanyRes,
  CompanyRes,
} from "../Type/company-types";
import { generateUrlForCompanyWithId } from "../Util/generateUrlForCompanyWithId";
import { SuccessfulRes } from "../Type/share-types";

export const getCompanyList = async (page: number, page_size: number) => {
  const url = "/companies/";
  return axiosInstanceWithToken
    .get(url, { params: { page, page_size } })
    .then((res): Promise<SuccessfulRes<GetAllCompanyRes>> => res.data);
};

export const getCompanyById = async (
  id: number,
): Promise<SuccessfulRes<CompanyBodyRes>> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const removeCompanyById = async (
  id: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForCompanyWithId(id);
  return axiosInstanceWithToken.delete(url).then((res) => res.data);
};

export const addCompany = async (
  company: AddNewCompanyBody,
): Promise<SuccessfulRes<CompanyRes>> => {
  return axiosInstanceWithToken
    .post("/company/", company)
    .then((res) => res.data);
};

export const updateCompanyInfo = async (
  companyInfo: CompanyInfo,
  id: number,
): Promise<SuccessfulRes<CompanyRes>> => {
  const url = generateUrlForCompanyWithId(id) + "update_info/";
  return axiosInstanceWithToken.put(url, companyInfo).then((res) => res.data);
};

export const updateCompanyVisible = async (
  isVisible: boolean,
  id: number,
): Promise<SuccessfulRes<CompanyRes>> => {
  const url = generateUrlForCompanyWithId(id) + "update_visible/";
  return axiosInstanceWithToken.put(url, isVisible).then((res) => res.data);
};

export const changeCompanyAvatar = async (
  avatar: FormData,
  id: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForCompanyWithId(id) + "update_avatar/";
  return axiosInstanceWithToken
    .put(url, avatar, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res.data);
};
