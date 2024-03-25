import React from "react";
import { Typography } from "@mui/material";
import { GenericPage } from "./Components/Generic-Page/GenericPage";

export const App = () => {
  return (
    <GenericPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from MEDUZZEN
      </Typography>
    </GenericPage>
  );
};
