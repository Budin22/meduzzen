import React, { memo, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { getUser } from "../Api/user-api";
import {
  useDispatchSetCurrentUser,
  useSelectorCurrentUser,
} from "../Hooks/user-hooks";
import { Header } from "../Components/Header";

export const AboutPage = memo(() => {
  const currentUser = useSelectorCurrentUser();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();
  console.log(currentUser);

  useEffect(() => {
    if (currentUser) return;
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token)
        .then((data) => {
          console.log(data);
          dispatchSetCurrentUser(data.result);
        })
        .catch((err) => console.log(err));
    }
  }, [dispatchSetCurrentUser, currentUser]);

  return (
    <Container>
      <Header />
      <Typography variant="h1" gutterBottom color="steelblue">
        About Page
      </Typography>
    </Container>
  );
});
