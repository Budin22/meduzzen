import React, { memo } from "react";
import { useSelectorAuthToken } from "../../Hooks/auth-token-hooks";
import { useSelectorTargetUser } from "../../Hooks/target-user-hooks";
import { UserChangePasswordForm } from "../Forms/UserChangePasswordForm";
import { useSelectorCurrentUser } from "../../Hooks/current-user-hooks";
import { UserChangeInfoForm } from "../Forms/UserChangeInfoForm";
import { Stack } from "@mui/material";
import { UserChangeAvatarForm } from "../Forms/UserChangeAvatarForm";

export const UpdateUserForm = memo(() => {
  const token = useSelectorAuthToken();
  const currentUser = useSelectorCurrentUser();
  const targetUser = useSelectorTargetUser();

  return (
    <Stack>
      <UserChangeAvatarForm
        targetUser={targetUser}
        currentUser={currentUser}
        token={token}
      />
      <UserChangeInfoForm
        targetUser={targetUser}
        currentUser={currentUser}
        token={token}
      />
      <UserChangePasswordForm id={targetUser.user_id} />
    </Stack>
  );
});
