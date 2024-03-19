import React, { memo } from "react";
import { Container, Typography } from "@mui/material";
import { useSelectorCurrentUser } from "../Hooks/user-hooks";
import { Unauthorized } from "../Components/Unauthorized";
import { Header } from "../Components/Header";

export const UserProfilePage = memo(() => {
  const currentUser = useSelectorCurrentUser();
  return (
    <Container>
      <Header />
      {currentUser ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from User Profile page
        </Typography>
      ) : (
        <Unauthorized />
      )}
    </Container>
  );
});
