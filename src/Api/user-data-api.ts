import { axiosInstance } from "./axios-instance";
import {
  AnalyticItem,
  AnswersList,
  QuizList,
  Rating,
  SuccessfulRes,
} from "../Type/share-types";
import { generateUrlForUserWithId } from "../Util/generateUrlForUserWithId";
import {
  CompaniesList,
  Notification,
  NotificationList,
} from "../Type/user-data-types";

export const getCompanyList = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "companies_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyInvitesList = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "invites_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getCompanyRequestsList = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "requests_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserGlobalRating = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<number>> => {
  const url = generateUrlForUserWithId(id) + "global_rating/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserGlobalRatingAnalytic = async (
  token: string,
  id: number,
): Promise<SuccessfulRes<AnalyticItem[]>> => {
  const url = generateUrlForUserWithId(id) + "global_rating_analytic/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserRatingInCompany = async (
  token: string,
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<Rating<number>>> => {
  const url =
    generateUrlForUserWithId(userId) + "rating_in_company/" + companyId + "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserRatingAnalyticInCompany = async (
  token: string,
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<Rating<AnalyticItem[]>>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "rating_analytic_in_company/" +
    companyId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserRatingForQuiz = async (
  token: string,
  userId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<number>>> => {
  const url =
    generateUrlForUserWithId(userId) + "rating_for_quiz/" + quizId + "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserRatingAnalyticForQuiz = async (
  token: string,
  userId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<AnalyticItem[]>>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "rating_analytic_for_quiz/" +
    quizId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserLastAnswersList = async (
  token: string,
  userId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url = generateUrlForUserWithId(userId) + "last_answers_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserLastAnswersCSV = async (
  token: string,
  userId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  // @todo add resp type
  const url = generateUrlForUserWithId(userId) + "last_answers_csv/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserLastQuizzesPass = async (
  token: string,
  userId: number,
): Promise<SuccessfulRes<QuizList>> => {
  const url = generateUrlForUserWithId(userId) + "quizzes_last_pass/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const getUserNotificationList = async (
  token: string,
  userId: number,
): Promise<SuccessfulRes<NotificationList>> => {
  const url = generateUrlForUserWithId(userId) + "notification_list/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const markUserNotificationAsRead = async (
  token: string,
  userId: number,
  notificationId: number,
): Promise<SuccessfulRes<Notification>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "mark_notification_as_read/" +
    notificationId +
    "/";
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
