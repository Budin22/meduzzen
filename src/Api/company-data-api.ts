import {
  AnalyticItem,
  AnswerItem,
  AnswersList,
  Rating,
  SuccessfulRes,
} from "../Type/share-types";
import { axiosInstance } from "./axios-instance";
import { generateUrlForCompanyWithId } from "../Util/generateUrlForCompanyWithId";
import {
  CompanyMembersList,
  CompanyQuizzesList,
  CompanyRatingItem,
  CompanyRatingItemForUser,
  CompanyUsersQuizzesLastPassList,
} from "../Type/company-data-types";

export const getCompanyMemberList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "members_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyInvitesList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "invites_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyRequestsList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "requests_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyBlockedList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "blocked_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyQuizzesList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyQuizzesList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "quizzes_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersList = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "last_answers_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersCSV = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  //@todo add type
  const url = generateUrlForCompanyWithId(companyId) + "last_answers_csv/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersListForUser = async (
  token: string,
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_list_for_user/" +
    userId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersCSVForUser = async (
  token: string,
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswerItem>> => {
  //@todo add type
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_csv_for_user/" +
    userId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersListForQuiz = async (
  token: string,
  quizId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_list_for_quiz/" +
    quizId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyLastAnswersCSVForQuiz = async (
  token: string,
  quizId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  //@todo add type
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_csv_for_quiz/" +
    quizId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingForUsers = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) + "summary_rating_for_users/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForUsers = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<AnalyticItem[]>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_analytic_for_users/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingForUser = async (
  token: string,
  companyId: number,
  userId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItemForUser<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_for_user/" +
    userId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForUser = async (
  token: string,
  companyId: number,
  userId: number,
): Promise<
  SuccessfulRes<Rating<CompanyRatingItemForUser<AnalyticItem[]>[]>>
> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_analytic_for_user/" +
    userId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingForQuiz = async (
  token: string,
  companyId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_for_quiz/" +
    quizId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForQuiz = async (
  token: string,
  companyId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<AnalyticItem[]>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_analytic_for_quiz/" +
    quizId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyQuizzesLastPass = async (
  token: string,
  companyId: number,
): Promise<SuccessfulRes<CompanyUsersQuizzesLastPassList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "quizzes_last_pass/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
