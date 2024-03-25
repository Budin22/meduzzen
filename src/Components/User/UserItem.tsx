import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback } from "react";
import { UserListItem } from "../../Type/userTypes";
import { useNavigate } from "react-router-dom";
import { generateUrlForUserWithId } from "../../Util/generateUrlForUserWithId";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";

export const UserItem = memo(({ user }: { user: UserListItem }) => {
  const navigation = useNavigate();
  const openUserProfileHandler = useCallback(() => {
    navigation(generateUrlForUserWithId(user.user_id));
  }, [navigation, user]);

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={user.user_email}
          secondary={
            <>
              <Typography component="span" variant="body2" color="blue">
                first name: {user.user_firstname}
              </Typography>
            </>
          }
        />
        <Button onClick={openUserProfileHandler}>Profile</Button>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
});
