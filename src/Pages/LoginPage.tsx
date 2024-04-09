import React, { memo } from "react";
import { GenericUnauthorizedContent } from "../Components/Generic-Page/GenericUnauthorizedContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { LoginPageBody } from "./LoginPageBody";

export const LoginPage = memo(() => {
  return (
    <GenericPage>
      <GenericUnauthorizedContent>
        <LoginPageBody />
      </GenericUnauthorizedContent>
    </GenericPage>
  );
});
