import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericAuthPage } from "../Components/Generic-Page/GenericAuthPage";

export const CompaniesPage = memo(() => {
  return (
    <GenericAuthPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Companies page
      </Typography>
    </GenericAuthPage>
  );
});
