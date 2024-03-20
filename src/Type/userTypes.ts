export interface RegistrationUser {
  user_password: string;
  user_password_repeat: string;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
}

export interface RegistrationUserSuccessfulRes {
  status_code: number;
  detail: string;
  result: {
    user_id: number;
  };
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
