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
