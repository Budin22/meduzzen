import {
  AnalyticItem,
  AnswerItem,
  AnswersList,
  Rating,
  SuccessfulRes,
} from "../Type/share-types";
import { axiosInstanceWithToken } from "./axios-instance-with-token";
import { generateUrlForCompanyWithId } from "../Util/generateUrlForCompanyWithId";
import {
  CompanyMembersList,
  CompanyQuizzesList,
  CompanyRatingItem,
  CompanyRatingItemForUser,
  CompanyUsersQuizzesLastPassList,
} from "../Type/company-data-types";

export const getCompanyMemberList = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "members_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyInvitesList = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "invites_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyRequestsList = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "requests_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyBlockedList = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyMembersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "blocked_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyQuizzesList = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyQuizzesList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "quizzes_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersList = async (
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "last_answers_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersCSV = async (
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  //@todo add type
  const url = generateUrlForCompanyWithId(companyId) + "last_answers_csv/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersListForUser = async (
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_list_for_user/" +
    userId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersCSVForUser = async (
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswerItem>> => {
  //@todo add type
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_csv_for_user/" +
    userId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersListForQuiz = async (
  quizId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_list_for_quiz/" +
    quizId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyLastAnswersCSVForQuiz = async (
  quizId: number,
  companyId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  //@todo add type
  const url =
    generateUrlForCompanyWithId(companyId) +
    "last_answers_csv_for_quiz/" +
    quizId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingForUsers = async (
  companyId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) + "summary_rating_for_users/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForUsers = async (
  companyId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<AnalyticItem[]>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_analytic_for_users/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingForUser = async (
  companyId: number,
  userId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItemForUser<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_for_user/" +
    userId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForUser = async (
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
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingForQuiz = async (
  companyId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<number>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_for_quiz/" +
    quizId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanySummaryRatingAnalyticForQuiz = async (
  companyId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<CompanyRatingItem<AnalyticItem[]>[]>>> => {
  const url =
    generateUrlForCompanyWithId(companyId) +
    "summary_rating_analytic_for_quiz/" +
    quizId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getCompanyQuizzesLastPass = async (
  companyId: number,
): Promise<SuccessfulRes<CompanyUsersQuizzesLastPassList>> => {
  const url = generateUrlForCompanyWithId(companyId) + "quizzes_last_pass/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};
