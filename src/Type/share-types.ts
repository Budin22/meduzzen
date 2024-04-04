export interface SuccessfulRes<T> {
  status_code: number;
  detail: string;
  result: T;
}

export interface Pagination {
  current_page: number;
  total_page: number;
  total_results: number;
}

export interface AnswerItem {
  user_id: number;
  company_id: number;
  quiz_id: number;
  question_id: number;
  question: string;
  answer: string;
  is_correct: boolean;
  created_at: string;
}

export interface AnswersList {
  answers: AnswerItem[];
}

export interface Rating<T> {
  rating: T;
}

export interface AnalyticItem {
  current_rating: number;
  average_rating: number;
  pass_at: string;
}

export interface QuizItem {
  quiz_id: number;
  last_quiz_pass_at: string;
}

export interface QuizList {
  quizzes: QuizItem[];
}
