import { Pagination } from "./shareTypes";

export interface GetAllCompanyRes {
  companies: CompanyItemBody[];
  pagination: Pagination;
}

export interface CompanyItemBody {
  company_id: number;
  company_name: string;
  company_title: string;
  company_avatar: string;
  is_visible: boolean;
}

export interface CompanyOwner {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
}

export interface CompanyBodyRes {
  company_id: number;
  company_name: string;
  company_title: string;
  company_avatar: string;
  is_visible: boolean;
  company_description: string;
  company_city: string;
  company_phone: string;
  company_links: string[];
  company_owner: CompanyOwner;
}

export interface AddNewCompanyBody {
  company_name: string;
  is_visible: boolean;
}

export interface CompanyRes {
  company_id: number;
}

export interface CompanyInfo {
  company_name: string;
  company_title: string;
  company_description: string;
  company_city: string;
  company_phone: string;
  company_links: string[];
}

export interface CompanyVisible {
  is_visible: boolean;
}

export interface CompanyAvatarUpdateSuccessfulRes {
  status_code: number;
  detail: string;
  result: string;
}
