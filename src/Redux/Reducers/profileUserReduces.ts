import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "../../Type/userTypes";

const namespace = "profileUser" as const;

export interface ProfileUserInitialState {
  profileUser: AuthUser[];
}

export const userInitialState: ProfileUserInitialState = {
  profileUser: [],
};

export const {
  actions: { addUserProfile, updateUserProfile, removeUserProfile },
  reducer,
} = createSlice({
  name: namespace,
  initialState: userInitialState,
  reducers: {
    addUserProfile(state, action: PayloadAction<AuthUser>) {
      const user = action.payload;
      if (!state.profileUser.find((u) => u.user_id === user.user_id)) {
        state.profileUser.push(user);
      }
    },
    updateUserProfile(state, action: PayloadAction<AuthUser>) {
      const user = action.payload;
      const index = state.profileUser.findIndex(
        (u) => u.user_id === user.user_id,
      );
      if (index > -1) {
        state.profileUser[index] = user;
      }
    },
    removeUserProfile(state, action: PayloadAction<number>) {
      state.profileUser = state.profileUser.filter(
        (u) => u.user_id !== action.payload,
      );
    },
  },
});
