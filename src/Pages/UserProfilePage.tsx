import React, { memo } from "react";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { UserProfilePageBody } from "./UserProfilePageBody";

export const UserProfilePage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <UserProfilePageBody />
      </GenericAuthContent>
    </GenericPage>
  );
});
