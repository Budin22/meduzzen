import { QuizItem } from "./share-types";

export interface CompanyMembersItem {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
  action_id: number;
  action: string;
}

export interface CompanyMembersList {
  users: CompanyMembersItem[];
}

export interface CompanyQuizzesItem {
  quiz_id: number;
  quiz_name: string;
  quiz_title: string;
  quiz_description: string;
}

export interface CompanyQuizzesList {
  quizzes: CompanyQuizzesItem[];
}

export interface CompanyRatingItem<T> {
  rating: T;
  user_id: number;
}

export interface CompanyRatingItemForUser<T> {
  rating: T;
  quiz_id: number;
}

export interface CompanyUsersQuizzesLastPassItem {
  user_is: number;
  quizzes: QuizItem[];
}

export interface CompanyUsersQuizzesLastPassList {
  users: CompanyUsersQuizzesLastPassItem[];
}
