import React, { memo } from "react";
import { Container, Typography } from "@mui/material";
import { useSelectorCurrentUser } from "../Hooks/user-hooks";
import { Header } from "../Components/Header";
import { Unauthorized } from "../Components/Unauthorized";

export const CompanyProfilePage = memo(() => {
  const currentUser = useSelectorCurrentUser();
  return (
    <Container>
      <Header />
      {currentUser ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Company Profile page
        </Typography>
      ) : (
        <Unauthorized />
      )}
    </Container>
  );
});
