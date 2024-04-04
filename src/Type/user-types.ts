import { Pagination } from "./share-types";

export interface RegistrationUser {
  user_password: string;
  user_password_repeat: string;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
}

export interface LoginUser {
  user_email: string;
  user_password: string;
}

export interface LoginUserRes {
  access_token: string;
  token_type: string;
}

export interface AuthUser {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
  user_status: string;
  user_city: string;
  user_phone: string;
  user_links: string[];
  is_superuser: boolean;
}

export interface UserListItem {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
}

export interface GetAllUserRes {
  users: UserListItem[];
  pagination: Pagination;
}

export interface UserInfo {
  user_firstname: string;
  user_lastname: string;
  user_status: string;
  user_city: string;
  user_phone: string;
  user_links: string[];
}

export interface ChangePassword {
  user_password: string;
  user_password_repeat: string;
}

export interface UserRes {
  user_id: number;
}
