import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";

export const CompanyProfilePage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Company Profile page
        </Typography>
      </GenericAuthContent>
    </GenericPage>
  );
});
