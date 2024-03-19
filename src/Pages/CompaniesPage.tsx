import React, { memo } from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "../Components/Header";
import { useSelectorCurrentUser } from "../Hooks/user-hooks";
import { Unauthorized } from "../Components/Unauthorized";

export const CompaniesPage = memo(() => {
  const currentUser = useSelectorCurrentUser();
  return (
    <Container>
      <Header />
      {currentUser ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Companies page
        </Typography>
      ) : (
        <Unauthorized />
      )}
    </Container>
  );
});
