import React, { memo, useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { useParams } from "react-router-dom";
import { getUserById } from "../Api/user-api";
import { useSelectorAuthToken } from "../Hooks/auth-token-hooks";
import { UpdateUserForm } from "../Components/User/UpdateUserForm";
import {
  useDispatchSetTargetUser,
  useSelectorTargetUser,
} from "../Hooks/target-user-hooks";
import { useSelectorCurrentUser } from "../Hooks/current-user-hooks";
import { BasicModal } from "../Components/Modals/BasicModal";
import { UserRemoveForm } from "../Components/Forms/UserRemoveForm";

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

  console.log(targetUser);
  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from User Profile page
        </Typography>
        {targetUser && (
          <>
            <Card sx={{ maxWidth: 600 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={targetUser.user_avatar}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {targetUser.user_email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  id: {targetUser.user_id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  first name: {targetUser.user_firstname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  last name: {targetUser.user_lastname}
                </Typography>
              </CardContent>
              <CardActions>
                {isChangeable && (
                  <>
                    <BasicModal name="Update user">
                      <UpdateUserForm />
                    </BasicModal>
                    <UserRemoveForm
                      targetUser={targetUser}
                      currentUser={currentUser}
                      token={token}
                    />
                  </>
                )}
              </CardActions>
            </Card>
          </>
        )}
      </GenericAuthContent>
    </GenericPage>
  );
});
