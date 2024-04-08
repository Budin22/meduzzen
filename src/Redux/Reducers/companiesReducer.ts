import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyItemBody } from "../../Type/company-types";

const namespace = "companyList" as const;

export interface CompanyListInitialState {
  companies: CompanyItemBody[];
  pagination: {
    current_page: number;
    total_page: number;
    total_results: number;
  };
}

export const companyListInitialState: CompanyListInitialState = {
  companies: [],
  pagination: {
    current_page: 0,
    total_page: 0,
    total_results: 0,
  },
};

export const {
  actions: { setCompanyList },
  reducer,
} = createSlice({
  name: namespace,
  initialState: companyListInitialState,
  reducers: {
    setCompanyList(state, action: PayloadAction<CompanyListInitialState>) {
      state.companies = action.payload.companies;
      state.pagination = action.payload.pagination;
    },
  },
});
