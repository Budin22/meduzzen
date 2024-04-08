import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "../../Type/user-types";

const namespace = "currentUser" as const;

export interface UserInitialState {
  currentUser: AuthUser[];
  role: string;
}

export const userInitialState: UserInitialState = {
  currentUser: [],
  role: "",
};

export const {
  actions: { setCurrentUser, removeCurrentUser, setRole, removeRole },
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
    setRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },
    removeRole(state) {
      state.role = "";
    },
  },
});
