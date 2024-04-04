import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserListItem } from "../../Type/user-types";

const namespace = "userList" as const;

export interface UserListInitialState {
  users: UserListItem[];
  pagination: {
    current_page: number;
    total_page: number;
    total_results: number;
  };
}

export const userListInitialState: UserListInitialState = {
  users: [],
  pagination: {
    current_page: 0,
    total_page: 0,
    total_results: 0,
  },
};

export const {
  actions: { setUserList },
  reducer,
} = createSlice({
  name: namespace,
  initialState: userListInitialState,
  reducers: {
    setUserList(state, action: PayloadAction<UserListInitialState>) {
      state.users = action.payload.users;
      state.pagination = action.payload.pagination;
    },
  },
});
