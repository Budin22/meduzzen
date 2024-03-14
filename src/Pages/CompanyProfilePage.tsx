import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const CompanyProfilePage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Company Profile page
      </Typography>
    </Container>
  );
});
