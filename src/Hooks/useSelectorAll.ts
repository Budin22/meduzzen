import { RootState, useAppSelector } from "../Redux/store";
import { useMemo } from "react";

const selectorAll = (state: RootState) => state;

export const useSelectorAll = () => {
  const { users } = useAppSelector(selectorAll);
  return useMemo(() => ({ users }), [users]);
};
