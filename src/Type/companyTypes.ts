export interface GetAllCompanySuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    companies: CompanyItemBody[];
    pagination: {
      current_page: number;
      total_page: number;
      total_results: number;
    };
  };
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

export interface GetCompanySuccessfulRes {
  status_code: number;
  detail: string;
  result: CompanySuccessfulRes;
}

export interface CompanySuccessfulRes {
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

export interface CompanySuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    company_id: number;
  };
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
