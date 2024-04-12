import React, { memo } from "react";
import { Typography } from "@mui/material";
import { GenericPage } from "../Components/Generic-Page/GenericPage";
import { ChartAnalytic } from "../Components/analytic/ChartAnalytic";

export const AboutPage = memo(() => {
  return (
    <GenericPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        About Page
      </Typography>
      <ChartAnalytic companyId={99} />
    </GenericPage>
  );
});
