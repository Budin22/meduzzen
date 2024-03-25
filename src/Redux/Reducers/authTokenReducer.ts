import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const namespace = "authToken" as const;

export interface AuthTokenInitialState {
  authToken: string;
}

export const authTokenInitialState: AuthTokenInitialState = {
  authToken: "",
};

export const {
  actions: { setAuthToken, removeAuthToken },
  reducer,
} = createSlice({
  name: namespace,
  initialState: authTokenInitialState,
  reducers: {
    setAuthToken(state, action: PayloadAction<AuthTokenInitialState>) {
      state.authToken = action.payload.authToken;
    },
    removeAuthToken(state) {
      state.authToken = "";
    },
  },
});
