import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as UserList from "../Redux/Reducers/userListReduces";
import { UserListInitialState } from "../Redux/Reducers/userListReduces";

const selectorUserList = (state: RootState): UserListInitialState =>
  state.userList;

export const useSelectorUserList = (): UserListInitialState => {
  const userList = useAppSelector(selectorUserList);
  return useMemo(() => userList, [userList]);
};

export const useDispatchSetUserList = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: UserListInitialState) => {
      dispatch(UserList.setUserList(action));
    },
    [dispatch],
  );
};
