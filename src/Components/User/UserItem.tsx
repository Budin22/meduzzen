import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback } from "react";
import { UserListItem } from "../../Type/userTypes";
import { useNavigate } from "react-router-dom";
import { generateUrlForUserWithId } from "../../Util/generateUrlForUserWithId";
import {
  Avatar,
  CardMedia,
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

  console.log(user);

  return (
    <>
      <ListItem alignItems="flex-start">
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user.user_avatar}
          alt="Live from space album cover"
        />
        <ListItemAvatar>
          {/*<Avatar alt="Remy Sharp" src={user.user_avatar} />*/}
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
