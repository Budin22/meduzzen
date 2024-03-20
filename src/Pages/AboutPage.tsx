import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericAccessPage } from "../Components/Generic-Page/GenericAccessPage";

export const AboutPage = memo(() => {
  return (
    <GenericAccessPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        About Page
      </Typography>
    </GenericAccessPage>
  );
});
