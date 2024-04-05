import { NewQuizQuestion, Question, SuccessfulRes } from "../Type/share-types";
import { axiosInstance } from "./axios-instance";
import {
  NewQuiz,
  FullQuiz,
  Quiz,
  QuizInfo,
  QuizResult,
} from "../Type/quiz-types";
import { generateUrlForQuizWithId } from "../Util/generateUrlForQuizWithId";

export const getQuizById = async (
  token: string,
  quizId: number,
): Promise<SuccessfulRes<FullQuiz>> => {
  const url = generateUrlForQuizWithId(quizId);
  return axiosInstance
    .get(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const deleteQuizById = async (
  token: string,
  quizId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForQuizWithId(quizId);
  return axiosInstance
    .delete(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const createQuiz = async (
  token: string,
  quiz: NewQuiz,
): Promise<SuccessfulRes<Quiz>> => {
  const url = "/quiz/";
  return axiosInstance
    .post(url, quiz, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const updateQuizInfo = async (
  token: string,
  quizId: number,
  quizInfo: QuizInfo,
): Promise<SuccessfulRes<Quiz>> => {
  const url = generateUrlForQuizWithId(quizId) + "/update_info/";
  return axiosInstance
    .put(url, quizInfo, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const addQuestionForQuiz = async (
  token: string,
  quizId: number,
  question: NewQuizQuestion,
): Promise<SuccessfulRes<Question>> => {
  const url = generateUrlForQuizWithId(quizId) + "/add_question/";
  return axiosInstance
    .post(url, question, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const takeQuiz = async (
  token: string,
  quizId: number,
  question: NewQuizQuestion,
): Promise<SuccessfulRes<QuizResult>> => {
  //@todo add request body type
  const url = generateUrlForQuizWithId(quizId) + "/take_quiz/";
  return axiosInstance
    .post(url, question, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
