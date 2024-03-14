import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const LoginPage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Login page
      </Typography>
    </Container>
  );
});
