import React, { memo } from "react";
import { Container, Typography } from "@mui/material";

export const AboutPage = memo(() => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from About page
      </Typography>
    </Container>
  );
});
