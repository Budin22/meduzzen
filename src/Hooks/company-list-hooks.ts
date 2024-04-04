import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as CompanyList from "../Redux/Reducers/companiesReducer";
import { CompanyListInitialState } from "../Redux/Reducers/companiesReducer";

const selectorUserList = (state: RootState): CompanyListInitialState =>
  state.companyList;

export const useSelectorCompanyList = (): CompanyListInitialState => {
  const companyList = useAppSelector(selectorUserList);
  return useMemo(() => companyList, [companyList]);
};

export const useDispatchSetCompanyList = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: CompanyListInitialState) => {
      dispatch(CompanyList.setCompanyList(action));
    },
    [dispatch],
  );
};
