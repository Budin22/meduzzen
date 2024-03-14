import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const CompaniesPage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Companies page
      </Typography>
    </Container>
  );
});
