import React, { memo } from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "../Components/Header";

export const AboutPage = memo(() => {
  return (
    <Container>
      <Header />
      <Typography variant="h1" gutterBottom color="steelblue">
        About Page
      </Typography>
    </Container>
  );
});
