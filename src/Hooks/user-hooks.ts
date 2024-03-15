import { useAppDispatch } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as User from "../Redux/Reducers/userReduces";
import { useSelectorAll } from "./useSelectorAll";

export const useDispatchAddUser = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: User.User) => {
      dispatch(User.addUser(action));
    },
    [dispatch],
  );
};

export const useSelectorUser = (): User.UserInitialState => {
  const { users } = useSelectorAll();
  return useMemo(() => users, [users]);
};
