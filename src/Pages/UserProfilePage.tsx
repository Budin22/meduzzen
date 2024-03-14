import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const UserProfilePage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from User Profile page
      </Typography>
    </Container>
  );
});
