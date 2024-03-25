import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import * as CurrentUser from "./Reducers/currentUserReduces";
import * as UserList from "./Reducers/userListReduces";
import * as TargetUser from "./Reducers/targetUserReduces";
import * as AuthToken from "./Reducers/authTokenReducer";

export const store = configureStore({
  reducer: {
    currentUser: CurrentUser.reducer,
    userList: UserList.reducer,
    targetUser: TargetUser.reducer,
    authToken: AuthToken.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
