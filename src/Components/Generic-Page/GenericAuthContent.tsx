import { memo, useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Unauthorized } from "../Unauthorized";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatchSetCurrentUser } from "../../Hooks/current-user-hooks";
import { getTokenFromLS, setTokenToLS } from "../../Type/token-actions";
import { getUser } from "../../Api/user-api";
import {
  useDispatchSetAuthToken,
  useSelectorAuthToken,
} from "../../Hooks/auth-token-hooks";
import { tokenStore } from "../../Api/axios-instance-with-token";

export const GenericAuthContent = memo(({ children }: any) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(true);
  const authToken = useSelectorAuthToken();
  const dispatchSetAuthToken = useDispatchSetAuthToken();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();

  const authHandler = useCallback(() => {
    if (authToken) {
      setTokenToLS(authToken);
      tokenStore.setToken(authToken);
      setIsLoading(false);
      return;
    }

    const lsToken = getTokenFromLS();
    if (lsToken) {
      tokenStore.setToken(lsToken);
      getUser()
        .then((res) => {
          dispatchSetAuthToken({ authToken: lsToken });
          dispatchSetCurrentUser(res.result);
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => setIsLoading(false));
      return;
    }

    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((token) => {
          tokenStore.setToken(token);
          getUser()
            .then((res) => {
              dispatchSetAuthToken({ authToken: token });
              dispatchSetCurrentUser(res.result);
            })
            .catch((err) => {
              console.log(err);
            })
            .then(() => setIsLoading(false));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setIsLoading(false);
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    authToken,
    dispatchSetAuthToken,
    dispatchSetCurrentUser,
  ]);

  useEffect(() => {
    authHandler();
  }, [authHandler]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Box sx={{ paddingTop: 8 }}>
        {!authToken ? <Unauthorized /> : children}
      </Box>
    </Box>
  );
});