import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericPage } from "../Components/Generic-Page/GenericPage";

export const AboutPage = memo(() => {
  return (
    <GenericPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        About Page
      </Typography>
    </GenericPage>
  );
});
