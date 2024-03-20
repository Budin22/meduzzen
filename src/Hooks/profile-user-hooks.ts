import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as ProfileUser from "../Redux/Reducers/profileUserReduces";
import { AuthUser, UserListItem } from "../Type/userTypes";
import { ProfileUserInitialState } from "../Redux/Reducers/profileUserReduces";

const selectorProfileUser = (state: RootState): ProfileUserInitialState =>
  state.profileUser;

export const useSelectorProfileUser = (): UserListItem[] => {
  const { profileUser } = useAppSelector(selectorProfileUser);
  return useMemo(() => profileUser, [profileUser]);
};
export const useDispatchAddUserProfile = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: AuthUser) => {
      dispatch(ProfileUser.addUserProfile(action));
    },
    [dispatch],
  );
};

export const useDispatchUpdateUserProfile = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: AuthUser) => {
      dispatch(ProfileUser.updateUserProfile(action));
    },
    [dispatch],
  );
};
export const useDispatchRemoveUserProfile = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (id: number) => {
      dispatch(ProfileUser.removeUserProfile(id));
    },
    [dispatch],
  );
};
