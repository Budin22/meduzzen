import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "../../Type/user-types";

const namespace = "targetUser" as const;

export interface TargetUserInitialState {
  targetUser: AuthUser[];
}

export const targetUserInitialState: TargetUserInitialState = {
  targetUser: [],
};

export const {
  actions: { setTargetUser, removeTargetUser },
  reducer,
} = createSlice({
  name: namespace,
  initialState: targetUserInitialState,
  reducers: {
    setTargetUser(state, action: PayloadAction<AuthUser>) {
      state.targetUser[0] = action.payload;
    },
    removeTargetUser(state) {
      state.targetUser = [];
    },
  },
});
