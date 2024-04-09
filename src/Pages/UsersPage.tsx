import React, { memo } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { UsersPageBody } from "./UsersPageBody";

export const UsersPage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <UsersPageBody />
      </GenericAuthContent>
    </GenericPage>
  );
});
