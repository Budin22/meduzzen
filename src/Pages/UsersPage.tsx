import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const UsersPage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Users page
      </Typography>
    </Container>
  );
});
