import React, { memo } from "react";
import { GenericUnauthorizedContent } from "../Components/Generic-Page/GenericUnauthorizedContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { RegistrationPageBody } from "./RegistrationPageBody";

export const RegistrationPage = memo(() => {
  return (
    <GenericPage>
      <GenericUnauthorizedContent>
        <RegistrationPageBody />
      </GenericUnauthorizedContent>
    </GenericPage>
  );
});
