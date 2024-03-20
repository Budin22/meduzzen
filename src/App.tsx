import React from "react";
import { Typography } from "@mui/material";
import { GenericAccessPage } from "./Components/Generic-Page/GenericAccessPage";

export const App = () => {
  return (
    <GenericAccessPage>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from MEDUZZEN
      </Typography>
    </GenericAccessPage>
  );
};
