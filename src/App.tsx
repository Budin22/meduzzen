import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Header } from "./Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useDispatchSetCurrentUser,
  useSelectorCurrentUser,
} from "./Hooks/user-hooks";
import { getUser } from "./Api/user-api";
import { Unauthorized } from "./Components/Unauthorized";
import { getTokenFromLS, setTokenToLS } from "./Type/tokenActions";

export const App = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const currentUser = useSelectorCurrentUser();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();

  useEffect(() => {
    const lsToken = getTokenFromLS();
    if (lsToken) {
      getUser(lsToken).then((res) => {
        dispatchSetCurrentUser(res.result);
      });
      return;
    }
    if (isAuthenticated && !currentUser) {
      getAccessTokenSilently()
        .then((token) => {
          setTokenToLS(token);
          getUser(token).then((res) => {
            dispatchSetCurrentUser(res.result);
          });
        })
        .catch((err) => console.log(err));
    }
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    currentUser,
    dispatchSetCurrentUser,
  ]);

  return (
    <Container>
      <Header />
      {currentUser ? (
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from MEDUZZEN
        </Typography>
      ) : (
        <Unauthorized />
      )}
    </Container>
  );
};
