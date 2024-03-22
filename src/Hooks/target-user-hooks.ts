import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as TargetUser from "../Redux/Reducers/targetUserReduces";
import { AuthUser, UserListItem } from "../Type/userTypes";
import { TargetUserInitialState } from "../Redux/Reducers/targetUserReduces";

const selectorTargetUser = (state: RootState): TargetUserInitialState =>
  state.targetUser;

export const useSelectorTargetUser = (): UserListItem[] => {
  const { targetUser } = useAppSelector(selectorTargetUser);
  return useMemo(() => targetUser, [targetUser]);
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
