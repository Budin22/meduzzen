export interface RegistrationUser {
  user_password: string;
  user_password_repeat: string;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
}

export interface RegistrationUserFailRes {
  detail: [
    {
      loc: [string, number];
      msg: string;
      type: string;
    },
  ];
}

export interface LoginUser {
  user_email: string;
  user_password: string;
}

export interface LoginUserSuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    access_token: string;
    token_type: string;
  };
}

export interface LoginUserFailRes {
  detail: [
    {
      loc: [string, number];
      msg: string;
      type: string;
    },
  ];
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

export interface AuthUserSuccessfulRes {
  status_code: number;
  detail: string;
  result: AuthUser;
}

export interface UserListItem {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
}

export interface GetAllUserSuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    users: UserListItem[];
    pagination: {
      current_page: number;
      total_page: number;
      total_results: number;
    };
  };
}

export interface DeleteUserSuccessfulRes {
  status_code: number;
  detail: string;
  result: string;
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

export interface UserSuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    user_id: number;
  };
}

export interface UserAvatarUpdateSuccessfulRes {
  status_code: number;
  detail: string;
  result: string;
}
