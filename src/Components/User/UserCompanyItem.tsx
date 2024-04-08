import * as React from "react";
import Typography from "@mui/material/Typography";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CardMedia, Divider, ListItem, ListItemText } from "@mui/material";
import Button from "@mui/material/Button";
import { generateUrlForCompanyWithId } from "../../Util/generateUrlForCompanyWithId";
import { CompaniesItem } from "../../Type/user-data-types";

export const UserCompanyItem = memo(
  ({ company }: { company: CompaniesItem }) => {
    const navigation = useNavigate();
    const openUserProfileHandler = useCallback(() => {
      navigation(generateUrlForCompanyWithId(company.company_id));
    }, [navigation, company]);

    return (
      <>
        <ListItem alignItems="flex-start">
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={company.company_avatar}
            alt="Live from space album cover"
          />
          <ListItemText
            primary={company.company_id + ")" + company.company_name}
            secondary={
              <Typography component="span" variant="body2" color="blue">
                title: {company.company_title}
              </Typography>
            }
          />
          <Button onClick={openUserProfileHandler}>Profile</Button>
        </ListItem>
        <Divider variant="inset" />
      </>
    );
  },
);
