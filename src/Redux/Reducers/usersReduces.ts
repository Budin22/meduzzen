import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserListItem } from "../../Type/userTypes";

const namespace = "users" as const;

export interface UsersInitialState {
  users: UserListItem[];
}

export const userInitialState: UsersInitialState = {
  users: [],
};

export const {
  actions: { addUserToList, addUserList, setAllUsers },
  reducer,
} = createSlice({
  name: namespace,
  initialState: userInitialState,
  reducers: {
    addUserToList(state, action: PayloadAction<UserListItem>) {
      state.users.push(action.payload);
    },
    addUserList(state, action: PayloadAction<UserListItem[]>) {
      const newUsers = action.payload;
      newUsers.forEach((user) => state.users.push(user));
    },

    setAllUsers(state, action: PayloadAction<UserListItem[]>) {
      state.users = [...action.payload];
    },
  },
});
