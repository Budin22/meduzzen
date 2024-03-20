import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import * as CurrentUser from "./Reducers/currentUserReduces";
import * as Users from "./Reducers/usersReduces";
import * as ProfileUser from "./Reducers/profileUserReduces";

export const store = configureStore({
  reducer: {
    currentUser: CurrentUser.reducer,
    users: Users.reducer,
    profileUser: ProfileUser.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
