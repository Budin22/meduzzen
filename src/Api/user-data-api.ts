import { axiosInstanceWithToken } from "./axios-instance-with-token";
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

export const getUserCompanyList = async (
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "companies_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserInvitesList = async (
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "invites_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserRequestsList = async (
  id: number,
): Promise<SuccessfulRes<CompaniesList>> => {
  const url = generateUrlForUserWithId(id) + "requests_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserGlobalRating = async (
  id: number,
): Promise<SuccessfulRes<number>> => {
  const url = generateUrlForUserWithId(id) + "global_rating/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserGlobalRatingAnalytic = async (
  id: number,
): Promise<SuccessfulRes<AnalyticItem[]>> => {
  const url = generateUrlForUserWithId(id) + "global_rating_analytic/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserRatingInCompany = async (
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<Rating<number>>> => {
  const url =
    generateUrlForUserWithId(userId) + "rating_in_company/" + companyId + "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserRatingAnalyticInCompany = async (
  userId: number,
  companyId: number,
): Promise<SuccessfulRes<Rating<AnalyticItem[]>>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "rating_analytic_in_company/" +
    companyId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserRatingForQuiz = async (
  userId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<number>>> => {
  const url =
    generateUrlForUserWithId(userId) + "rating_for_quiz/" + quizId + "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserRatingAnalyticForQuiz = async (
  userId: number,
  quizId: number,
): Promise<SuccessfulRes<Rating<AnalyticItem[]>>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "rating_analytic_for_quiz/" +
    quizId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserLastAnswersList = async (
  userId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  const url = generateUrlForUserWithId(userId) + "last_answers_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserLastAnswersCSV = async (
  userId: number,
): Promise<SuccessfulRes<AnswersList>> => {
  // @todo add resp type
  const url = generateUrlForUserWithId(userId) + "last_answers_csv/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserLastQuizzesPass = async (
  userId: number,
): Promise<SuccessfulRes<QuizList>> => {
  const url = generateUrlForUserWithId(userId) + "quizzes_last_pass/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const getUserNotificationList = async (
  userId: number,
): Promise<SuccessfulRes<NotificationList>> => {
  const url = generateUrlForUserWithId(userId) + "notification_list/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const markUserNotificationAsRead = async (
  userId: number,
  notificationId: number,
): Promise<SuccessfulRes<Notification>> => {
  const url =
    generateUrlForUserWithId(userId) +
    "mark_notification_as_read/" +
    notificationId +
    "/";
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};
