import { NewQuizQuestion, Question, SuccessfulRes } from "../Type/share-types";
import { axiosInstanceWithToken } from "./axios-instance-with-token";
import { generateUrlForQuestionWithId } from "../Util/generateUrlForQuestionWithId";

export const updateQuestionInfo = async (
  questionId: number,
  questionInfo: NewQuizQuestion,
): Promise<SuccessfulRes<Question>> => {
  const url = generateUrlForQuestionWithId(questionId) + "update_info/";
  return axiosInstanceWithToken.put(url, questionInfo).then((res) => res.data);
};

export const deleteQuestion = async (
  questionId: number,
): Promise<SuccessfulRes<string>> => {
  const url = generateUrlForQuestionWithId(questionId);
  return axiosInstanceWithToken.delete(url).then((res) => res.data);
};
