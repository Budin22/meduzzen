import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Divider, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { CompanyQuizzesItem } from "../../Type/company-data-types";
import Box from "@mui/material/Box";
import { generateUrlForQuizWithId } from "../../Util/generateUrlForQuizWithId";

export const CompanyQuizItem = memo(
  ({ quiz }: { quiz: CompanyQuizzesItem }) => {
    const navigation = useNavigate();
    const openUserProfileHandler = useCallback(() => {
      navigation(generateUrlForQuizWithId(quiz.quiz_id));
    }, [navigation, quiz]);

    return (
      <div>
        <ListItem>
          <ListItemText
            primary={quiz.quiz_name}
            secondary={
              <Typography component="span" variant="body2" color="blue">
                id: {quiz.quiz_id}) title: {quiz.quiz_title}
              </Typography>
            }
          />
        </ListItem>
        <Box>
          <Button onClick={openUserProfileHandler}>Quiz</Button>
        </Box>
        <Divider variant="inset" />
      </div>
    );
  },
);
