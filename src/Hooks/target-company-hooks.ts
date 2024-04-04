import { RootState, useAppDispatch, useAppSelector } from "../Redux/store";
import { useCallback, useMemo } from "react";
import * as TargetCompany from "../Redux/Reducers/targetCompanyReducer";
import { TargetCompanyInitialState } from "../Redux/Reducers/targetCompanyReducer";
import { CompanySuccessfulRes } from "../Type/companyTypes";

const selectorTargetCompany = (state: RootState): TargetCompanyInitialState =>
  state.targetCompany;

export const useSelectorTargetCompany = (): CompanySuccessfulRes => {
  const { targetCompany } = useAppSelector(selectorTargetCompany);
  const company = targetCompany[0];
  return useMemo(() => company, [company]);
};
export const useDispatchSetTargetCompany = () => {
  const dispatch = useAppDispatch();
  return useCallback(
    (action: CompanySuccessfulRes) => {
      dispatch(TargetCompany.setTargetCompany(action));
    },
    [dispatch],
  );
};

export const useDispatchRemoveTargetCompany = () => {
  const dispatch = useAppDispatch();
  return useCallback(() => {
    dispatch(TargetCompany.removeTargetCompany());
  }, [dispatch]);
};
