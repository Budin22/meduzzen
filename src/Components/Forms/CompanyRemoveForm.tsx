import React, { FormEvent, memo, useCallback } from "react";
import Button from "@mui/material/Button";
import { removeCompanyById } from "../../Api/company-api";
import { CompanySuccessfulRes } from "../../Type/companyTypes";
import { useDispatchRemoveTargetCompany } from "../../Hooks/target-company-hooks";
import { useNavigate } from "react-router-dom";

export const CompanyRemoveForm = memo(
  ({
    targetCompany,
    token,
  }: {
    targetCompany: CompanySuccessfulRes;
    token: string;
  }) => {
    const dispatchRemoveTargetCompany = useDispatchRemoveTargetCompany();
    const navigation = useNavigate();

    const removeCompanyHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        removeCompanyById(token, targetCompany.company_id)
          .then((data) => {
            dispatchRemoveTargetCompany();
            navigation("/companies/");
          })
          .catch((err) => console.log(err));
      },
      [
        token,
        dispatchRemoveTargetCompany,
        navigation,
        targetCompany.company_id,
      ],
    );

    return (
      <form onSubmit={removeCompanyHandler}>
        <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
          Remove company
        </Button>
      </form>
    );
  },
);
