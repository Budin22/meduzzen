import { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { Unauthorized } from "../Unauthorized";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatchSetCurrentUser } from "../../Hooks/current-user-hooks";
import { getTokenFromLS, setTokenToLS } from "../../Type/tokenActions";
import { getUser } from "../../Api/user-api";
import { GenericPageProps } from "./generic-page-props";
import {
  useDispatchSetAuthToken,
  useSelectorAuthToken,
} from "../../Hooks/auth-token-hooks";

export const GenericAuthPage = memo(({ children }: GenericPageProps) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const authToken = useSelectorAuthToken();
  const dispatchSetAuthToken = useDispatchSetAuthToken();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();

  useEffect(() => {
    if (authToken) {
      setTokenToLS(authToken);
      return;
    }

    const lsToken = getTokenFromLS();
    if (lsToken) {
      getUser(lsToken)
        .then((res) => {
          dispatchSetAuthToken({ authToken: lsToken });
          dispatchSetCurrentUser(res.result);
        })
        .catch((err) => console.log(err));
      return;
    }

    if (isAuthenticated) {
      getAccessTokenSilently()
        .then((token) => {
          setTokenToLS(token);
          dispatchSetAuthToken({ authToken: token });
        })
        .catch((err) => console.log(err));
    }
  }, [
    getAccessTokenSilently,
    isAuthenticated,
    authToken,
    dispatchSetAuthToken,
    dispatchSetCurrentUser,
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
