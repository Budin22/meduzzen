import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback, useEffect, useState } from "react";
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
import { getUserLastQuizzesPass } from "../../Api/user-data-api";

export const CompanyMemberItem = memo(
  ({ member, children }: { member: CompanyMembersItem; children: any }) => {
    const [last_quiz_pass_at, setLast_quiz_pass_at] = useState("");
    const navigation = useNavigate();
    const openUserProfileHandler = useCallback(() => {
      navigation(generateUrlForUserWithId(member.user_id));
    }, [navigation, member]);

    useEffect(() => {
      getUserLastQuizzesPass(member.user_id)
        .then((data) => {
          const quizzes = data.result.quizzes;
          setLast_quiz_pass_at(quizzes[quizzes.length - 1].last_quiz_pass_at);
        })
        .catch((err) => console.log(err));
    }, [member.user_id]);

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
        {last_quiz_pass_at && <span>last pass: {last_quiz_pass_at}</span>}
        <Box>
          <Button onClick={openUserProfileHandler}>Profile</Button>
          {children}
        </Box>
        <Divider variant="inset" />
      </>
    );
  },
);
