import { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { Unauthorized } from "../Unauthorized";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useDispatchRemoveCurrentUser,
  useDispatchSetCurrentUser,
} from "../../Hooks/current-user-hooks";
import {
  getTokenFromLS,
  removeToken,
  setTokenToLS,
} from "../../Type/tokenActions";
import { getUser } from "../../Api/user-api";
import { GenericPageProps } from "./generic-page-props";
import {
  useDispatchRemoveAuthToken,
  useDispatchSetAuthToken,
  useSelectorAuthToken,
} from "../../Hooks/auth-token-hooks";

export const GenericAuthContent = memo(({ children }: GenericPageProps) => {
  const { getAccessTokenSilently, isAuthenticated, logout } = useAuth0();
  const authToken = useSelectorAuthToken();
  const dispatchSetAuthToken = useDispatchSetAuthToken();
  const dispatchRemoveAuthToken = useDispatchRemoveAuthToken();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();
  const dispatchRemoveCurrentUser = useDispatchRemoveCurrentUser();

  useEffect(() => {
    if (authToken) {
      console.log("authToken");
      setTokenToLS(authToken);
      return;
    }

    const lsToken = getTokenFromLS();
    if (lsToken) {
      console.log("lsToken");
      getUser(lsToken)
        .then((res) => {
          dispatchSetAuthToken({ authToken: lsToken });
          dispatchSetCurrentUser(res.result);
        })
        .catch((err) => {
          removeToken();
          dispatchRemoveAuthToken();
          dispatchRemoveCurrentUser();
          logout();
          console.log(err);
        });
      return;
    }

    if (isAuthenticated) {
      console.log("isAuthenticated");
      getAccessTokenSilently()
        .then((token) => {
          getUser(token)
            .then((res) => {
              dispatchSetAuthToken({ authToken: token });
              dispatchSetCurrentUser(res.result);
            })
            .catch((err) => {
              removeToken();
              dispatchRemoveAuthToken();
              dispatchRemoveCurrentUser();
              logout();
            });
        })
        .catch((err) => {
          removeToken();
          dispatchRemoveAuthToken();
          dispatchRemoveCurrentUser();
          logout();
        });
    }
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    authToken,
    dispatchSetAuthToken,
    dispatchSetCurrentUser,
    dispatchRemoveAuthToken,
    dispatchRemoveCurrentUser,
    logout,
  ]);
  return (
    <Box>
      <Header />
      <Box sx={{ paddingTop: 8 }}>
        {!authToken ? <Unauthorized /> : children}
      </Box>
    </Box>
  );
});
