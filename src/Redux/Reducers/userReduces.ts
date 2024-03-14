import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const namespace = "user" as const;

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}
export interface UserInitialState {
  users: User[];
}

export const userInitialState: UserInitialState = {
  users: [
    { id: 1, email: "mail111@sdfsdf.com", firstName: "1", lastName: "1" },
    { id: 2, email: "mail222@sdfsdf.com", firstName: "2", lastName: "2" },
    { id: 2, email: "mail333@sdfsdf.com", firstName: "2", lastName: "2" },
  ],
};

export const {
  actions: { addUser },
  reducer,
} = createSlice({
  name: namespace,
  initialState: userInitialState,
  reducers: {
    addUser(state, action: PayloadAction<User>) {
      const user = state.users.find((u) => u.email === action.payload.email);
      if (user !== undefined) {
        state.users.push(user);
      } else {
        alert("User with exist");
      }
    },
  },
});
