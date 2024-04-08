import React, { FormEvent, memo, useCallback } from "react";
import Button from "@mui/material/Button";
import { removeCompanyById } from "../../../Api/company-api";
import { CompanyBodyRes } from "../../../Type/company-types";
import { useDispatchRemoveTargetCompany } from "../../../Hooks/target-company-hooks";
import { useNavigate } from "react-router-dom";

export const CompanyRemoveForm = memo(
  ({ targetCompany }: { targetCompany: CompanyBodyRes }) => {
    const dispatchRemoveTargetCompany = useDispatchRemoveTargetCompany();
    const navigation = useNavigate();

    const removeCompanyHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        removeCompanyById(targetCompany.company_id)
          .then((data) => {
            dispatchRemoveTargetCompany();
            navigation("/companies/");
          })
          .catch((err) => console.log(err));
      },
      [dispatchRemoveTargetCompany, navigation, targetCompany.company_id],
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
