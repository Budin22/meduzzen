import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { CompanyMembersItem } from "../../Type/company-data-types";
import { generateUrlForUserWithId } from "../../Util/generateUrlForUserWithId";
import Box from "@mui/material/Box";

export const CompanyMemberItem = memo(
  ({ member, children }: { member: CompanyMembersItem; children: any }) => {
    const navigation = useNavigate();
    const openUserProfileHandler = useCallback(() => {
      navigation(generateUrlForUserWithId(member.user_id));
    }, [navigation, member]);

    return (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={member.user_avatar} />
          </ListItemAvatar>
          <ListItemText
            primary={member.user_email}
            secondary={
              <Typography component="span" variant="body2" color="blue">
                {member.user_id}) {member.user_firstname}
              </Typography>
            }
          />
        </ListItem>
        <Box>
          <Button onClick={openUserProfileHandler}>Profile</Button>
          {children}
        </Box>
        <Divider variant="inset" />
      </>
    );
  },
);
