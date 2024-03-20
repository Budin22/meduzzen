import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as Users from "../Redux/Reducers/usersReduces";
import { UserListItem } from "../Type/userTypes";
import { UsersInitialState } from "../Redux/Reducers/usersReduces";

const selectorUsers = (state: RootState): UsersInitialState => state.users;

export const useSelectorUsers = (): UserListItem[] => {
  const { users } = useAppSelector(selectorUsers);
  return useMemo(() => users, [users]);
};
export const useDispatchAddUserToList = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: UserListItem) => {
      dispatch(Users.addUserToList(action));
    },
    [dispatch],
  );
};

export const useDispatchAddUserList = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: UserListItem[]) => {
      dispatch(Users.addUserList(action));
    },
    [dispatch],
  );
};

export const useDispatchSetAllUsers = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: UserListItem[]) => {
      dispatch(Users.setAllUsers(action));
    },
    [dispatch],
  );
};
