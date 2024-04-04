import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "../../Type/user-types";

const namespace = "currentUser" as const;

export interface UserInitialState {
  currentUser: AuthUser[];
}

export const userInitialState: UserInitialState = {
  currentUser: [],
};

export const {
  actions: { setCurrentUser, removeCurrentUser },
  reducer,
} = createSlice({
  name: namespace,
  initialState: userInitialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<AuthUser>) {
      state.currentUser = [action.payload];
    },
    removeCurrentUser(state) {
      state.currentUser = [];
    },
  },
});
