import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as TargetUser from "../Redux/Reducers/targetUserReduces";
import { AuthUser } from "../Type/userTypes";
import { TargetUserInitialState } from "../Redux/Reducers/targetUserReduces";

const selectorTargetUser = (state: RootState): TargetUserInitialState =>
  state.targetUser;

export const useSelectorTargetUser = (): AuthUser => {
  const { targetUser } = useAppSelector(selectorTargetUser);
  const user = targetUser[0];
  return useMemo(() => user, [user]);
};
export const useDispatchSetTargetUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: AuthUser) => {
      dispatch(TargetUser.setTargetUser(action));
    },
    [dispatch],
  );
};

export const useDispatchRemoveTargetUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(TargetUser.removeTargetUser());
  }, [dispatch]);
};
