import React, { memo, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { useParams } from "react-router-dom";
import { getUserById } from "../Api/user-api";
import { useSelectorAuthToken } from "../Hooks/auth-token-hooks";
import { UserItem } from "../Components/User/UserItem";
import { UpdateUserForm } from "../Components/User/UpdateUserForm";
import {
  useDispatchSetTargetUser,
  useSelectorTargetUser,
} from "../Hooks/target-user-hooks";
import { useSelectorCurrentUser } from "../Hooks/current-user-hooks";

export const UserProfilePage = memo(() => {
  const [isChangeable, setIsChangeable] = useState(false);
  const token = useSelectorAuthToken();
  const currentUser = useSelectorCurrentUser();
  const targetUser = useSelectorTargetUser();
  const dispatchSetTargetUser = useDispatchSetTargetUser();
  const { id } = useParams();

  useEffect(() => {
    const selectedUserId = Number(id);
    if (!currentUser || !selectedUserId) return;
    if (currentUser.user_id === selectedUserId || currentUser.is_superuser)
      setIsChangeable(true);
    if (targetUser && targetUser.user_id === selectedUserId) return;

    getUserById(token, selectedUserId)
      .then((data) => {
        dispatchSetTargetUser(data.result);
      })
      .catch((err) => console.log(err));
  }, [id, token, dispatchSetTargetUser, currentUser, isChangeable, targetUser]);

  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from User Profile page
        </Typography>
        {targetUser && (
          <>
            <UserItem user={targetUser} />
            {isChangeable && <UpdateUserForm />}
          </>
        )}
      </GenericAuthContent>
    </GenericPage>
  );
});
