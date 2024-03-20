import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericAuthPage } from "../Components/Generic-Page/GenericAuthPage";

export const CompanyProfilePage = memo(() => {
  return (
    <GenericAuthPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Company Profile page
      </Typography>
    </GenericAuthPage>
  );
});
