import React, { memo } from "react";
import { useSelectorAuthToken } from "../../Hooks/auth-token-hooks";
import { useSelectorTargetUser } from "../../Hooks/target-user-hooks";
import { UserChangePasswordForm } from "../Forms/UserChangePasswordForm";
import { UserChangeAvatarForm } from "../Forms/UserChangeAvatarForm";
import { useSelectorCurrentUser } from "../../Hooks/current-user-hooks";
import { UserChangeInfoForm } from "../Forms/UserChangeInfoForm";
import { UserRemoveForm } from "../Forms/UserRemoveForm";

export const UpdateUserForm = memo(() => {
  const token = useSelectorAuthToken();
  const currentUser = useSelectorCurrentUser();
  const targetUser = useSelectorTargetUser();
  return (
    <>
      <UserChangeInfoForm
        targetUser={targetUser}
        currentUser={currentUser}
        token={token}
      />
      <UserChangePasswordForm id={targetUser.user_id} />
      <UserChangeAvatarForm
        targetUser={targetUser}
        currentUser={currentUser}
        token={token}
      />
      <UserRemoveForm
        targetUser={targetUser}
        currentUser={currentUser}
        token={token}
      />
    </>
  );
});
