import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as User from "../Redux/Reducers/currentUserReduces";
import { AuthUser } from "../Type/user-types";
import { UserInitialState } from "../Redux/Reducers/currentUserReduces";

const selectorCurrentUser = (state: RootState): UserInitialState =>
  state.currentUser;

export const useSelectorCurrentUser = (): {
  currentUser: AuthUser;
  role: string;
} => {
  const { currentUser, role } = useAppSelector(selectorCurrentUser);
  const user = currentUser[0];
  return useMemo(() => {
    return { currentUser: user, role };
  }, [user, role]);
};
export const useDispatchSetCurrentUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: AuthUser) => {
      dispatch(User.setCurrentUser(action));
    },
    [dispatch],
  );
};

export const useDispatchRemoveCurrentUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(User.removeCurrentUser());
  }, [dispatch]);
};

export const useDispatchSetRole = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: string) => {
      dispatch(User.setRole(action));
    },
    [dispatch],
  );
};

export const useDispatchRemoveRole = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(User.removeRole());
  }, [dispatch]);
};
