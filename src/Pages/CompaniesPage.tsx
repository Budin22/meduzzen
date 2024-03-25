import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericAuthContent } from "../Components/Generic-Page/GenericAuthContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";

export const CompaniesPage = memo(() => {
  return (
    <GenericPage>
      <GenericAuthContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Companies page
        </Typography>
      </GenericAuthContent>
    </GenericPage>
  );
});
