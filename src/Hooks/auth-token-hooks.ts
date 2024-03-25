import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as AuthToken from "../Redux/Reducers/authTokenReducer";
import { AuthTokenInitialState } from "../Redux/Reducers/authTokenReducer";

const selectorAuthToken = (state: RootState): AuthTokenInitialState =>
  state.authToken;

export const useSelectorAuthToken = (): string => {
  const { authToken } = useAppSelector(selectorAuthToken);
  return useMemo(() => authToken, [authToken]);
};
export const useDispatchSetAuthToken = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: AuthTokenInitialState) => {
      dispatch(AuthToken.setAuthToken(action));
    },
    [dispatch],
  );
};

export const useDispatchRemoveAuthToken = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(AuthToken.removeAuthToken());
  }, [dispatch]);
};
