import React, { memo } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { CompanyProfileBody } from "./CompanyProfileBody";

export const CompanyProfilePage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <CompanyProfileBody />
      </GenericAuthContent>
    </GenericPage>
  );
});
