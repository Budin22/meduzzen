export interface CompaniesItem {
  company_id: number;
  company_name: string;
  company_title: string;
  company_avatar: string;
  is_visible: boolean;
  action_id: number;
  action: string;
}

export interface CompaniesList {
  companies: CompaniesItem[];
}

export interface NotificationItem {
  notification_id: number;
  notification_title: string;
  notification_message: string;
  notification_user_id: number;
  notification_company_id: number;
  is_read: boolean;
  created_at: string;
}

export interface NotificationList {
  notifications: NotificationItem[];
}

export interface Notification {
  notification_id: number;
}
