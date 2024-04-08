import { NewQuizQuestion } from "./share-types";

export interface QuizCreator {
  user_id: number;
  user_email: string;
  user_firstname: string;
  user_lastname: string;
  user_avatar: string;
}

export interface FullQuestion {
  question_id: number;
  question_text: string;
  question_answers: string[];
}

export interface FullQuiz {
  quiz_id: number;
  quiz_name: string;
  quiz_title: string;
  quiz_description: string;
  quiz_frequency: number;
  created_by: QuizCreator;
  questions_list: FullQuestion[];
}

export interface NewQuiz {
  quiz_name: string;
  quiz_frequency: number;
  company_id: number;
  questions_list: NewQuizQuestion[];
}

export interface Quiz {
  quiz_id: number;
}

export interface QuizInfo {
  quiz_name: string;
  quiz_title: string;
  quiz_description: string;
  quiz_frequency: number;
}

export interface QuizResult {
  result_id: number;
  result_score: number;
}
