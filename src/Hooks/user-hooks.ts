import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as User from "../Redux/Reducers/userReduces";
import { AuthUser } from "../Type/userTypes";
import { UserInitialState } from "../Redux/Reducers/userReduces";

const selectorCurrentUser = (state: RootState): UserInitialState =>
  state.currentUser;

export const useSelectorCurrentUser = (): AuthUser => {
  const { currentUser } = useAppSelector(selectorCurrentUser);
  const user = currentUser[0];
  return useMemo(() => user, [user]);
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
