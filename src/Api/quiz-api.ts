import { NewQuizQuestion, Question, SuccessfulRes } from "../Type/share-types";
import { axiosInstanceWithToken } from "./axios-instance-with-token";
import {
  NewQuiz,
  FullQuiz,
  Quiz,
  QuizInfo,
  QuizResult,
} from "../Type/quiz-types";
import { generateUrlForQuizWithId } from "../Util/generateUrlForQuizWithId";

export const getQuizById = async (
  quizId: number,
): Promise<SuccessfulRes<FullQuiz>> => {
  const url = generateUrlForQuizWithId(quizId);
  return axiosInstanceWithToken.get(url).then((res) => res.data);
};

export const deleteQuizById = async (
  quizId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForQuizWithId(quizId);
  return axiosInstanceWithToken.delete(url).then((res) => res.data);
};

export const createQuiz = async (
  quiz: NewQuiz,
): Promise<SuccessfulRes<Quiz>> => {
  const url = "/quiz/";
  return axiosInstanceWithToken.post(url, quiz).then((res) => res.data);
};

export const updateQuizInfo = async (
  quizId: number,
  quizInfo: QuizInfo,
): Promise<SuccessfulRes<Quiz>> => {
  const url = generateUrlForQuizWithId(quizId) + "/update_info/";
  return axiosInstanceWithToken.put(url, quizInfo).then((res) => res.data);
};

export const addQuestionForQuiz = async (
  quizId: number,
  question: NewQuizQuestion,
): Promise<SuccessfulRes<Question>> => {
  const url = generateUrlForQuizWithId(quizId) + "/add_question/";
  return axiosInstanceWithToken.post(url, question).then((res) => res.data);
};

export const takeQuiz = async (
  quizId: number,
  question: NewQuizQuestion,
): Promise<SuccessfulRes<QuizResult>> => {
  //@todo add request body type
  const url = generateUrlForQuizWithId(quizId) + "/take_quiz/";
  return axiosInstanceWithToken.post(url, question).then((res) => res.data);
};
