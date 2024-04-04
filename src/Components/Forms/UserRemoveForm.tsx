import React, { FormEvent, memo, useCallback } from "react";
import Button from "@mui/material/Button";
import { removeUserById } from "../../Api/user-api";
import { useDispatchRemoveTargetUser } from "../../Hooks/target-user-hooks";
import { AuthUser } from "../../Type/user-types";
import { useDispatchRemoveCurrentUser } from "../../Hooks/current-user-hooks";
import { removeToken } from "../../Type/token-actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatchRemoveAuthToken } from "../../Hooks/auth-token-hooks";
import { useNavigate } from "react-router-dom";

export const UserRemoveForm = memo(
  ({
    targetUser,
    currentUser,
    token,
  }: {
    targetUser: AuthUser;
    currentUser: AuthUser;
    token: string;
  }) => {
    const { logout } = useAuth0();
    const navigation = useNavigate();
    const dispatchRemoveTargetUser = useDispatchRemoveTargetUser();
    const dispatchRemoveCurrentUser = useDispatchRemoveCurrentUser();
    const dispatchRemoveAuthToken = useDispatchRemoveAuthToken();
    const removeUserHandler = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        removeUserById(token, targetUser.user_id)
          .then((data) => {
            if (currentUser.user_id === targetUser.user_id) {
              dispatchRemoveCurrentUser();
            }
            logout();
            removeToken();
            dispatchRemoveAuthToken();
            dispatchRemoveTargetUser();
            navigation("/");
          })
          .catch((err) => console.log(err));
      },
      [
        token,
        currentUser,
        targetUser,
        dispatchRemoveTargetUser,
        dispatchRemoveCurrentUser,
        dispatchRemoveAuthToken,
        navigation,
        logout,
      ],
    );

    return (
      <form onSubmit={removeUserHandler}>
        <Button variant="contained" type="submit" sx={{ maxWidth: "100%" }}>
          Remove user
        </Button>
      </form>
    );
  },
);
