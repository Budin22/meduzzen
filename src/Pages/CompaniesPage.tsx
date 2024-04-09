import React, { memo } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { CompaniesPageBody } from "./CompaniesPageBody";

export const CompaniesPage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <CompaniesPageBody />
      </GenericAuthContent>
    </GenericPage>
  );
});
