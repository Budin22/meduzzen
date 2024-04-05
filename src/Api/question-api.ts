import { NewQuizQuestion, Question, SuccessfulRes } from "../Type/share-types";
import { axiosInstance } from "./axios-instance";
import { generateUrlForQuestionWithId } from "../Util/generateUrlForQuestionWithId";

export const updateQuestionInfo = async (
  token: string,
  questionId: number,
  questionInfo: NewQuizQuestion,
): Promise<SuccessfulRes<Question>> => {
  const url = generateUrlForQuestionWithId(questionId) + "update_info/";
  return axiosInstance
    .put(url, questionInfo, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};

export const deleteQuestion = async (
  token: string,
  questionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForQuestionWithId(questionId);
  return axiosInstance
    .delete(url, { headers: { Authorization: "Bearer " + token } })
    .then((res) => res.data);
};
