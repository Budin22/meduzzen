import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CompanyBodyRes } from "../../Type/companyTypes";

const namespace = "targetCompany" as const;

export interface TargetCompanyInitialState {
  targetCompany: CompanyBodyRes[];
}

export const targetCompanyInitialState: TargetCompanyInitialState = {
  targetCompany: [],
};

export const {
  actions: { setTargetCompany, removeTargetCompany },
  reducer,
} = createSlice({
  name: namespace,
  initialState: targetCompanyInitialState,
  reducers: {
    setTargetCompany(state, action: PayloadAction<CompanyBodyRes>) {
      state.targetCompany[0] = action.payload;
    },
    removeTargetCompany(state) {
      state.targetCompany = [];
    },
  },
});
