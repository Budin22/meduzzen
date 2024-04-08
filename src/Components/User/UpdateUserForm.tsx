import React, { memo } from "react";
import { useSelectorTargetUser } from "../../Hooks/target-user-hooks";
import { UserChangePasswordForm } from "../Forms/User/UserChangePasswordForm";
import { useSelectorCurrentUser } from "../../Hooks/current-user-hooks";
import { UserChangeInfoForm } from "../Forms/User/UserChangeInfoForm";
import { Stack } from "@mui/material";
import { UserChangeAvatarForm } from "../Forms/User/UserChangeAvatarForm";

export const UpdateUserForm = memo(() => {
  const { currentUser } = useSelectorCurrentUser();
  const targetUser = useSelectorTargetUser();

  return (
    <Stack>
      <UserChangeAvatarForm targetUser={targetUser} currentUser={currentUser} />
      <UserChangeInfoForm targetUser={targetUser} currentUser={currentUser} />
      <UserChangePasswordForm id={targetUser.user_id} />
    </Stack>
  );
});
