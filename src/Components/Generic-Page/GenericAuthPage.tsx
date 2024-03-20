import { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { Unauthorized } from "../Unauthorized";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useDispatchSetCurrentUser,
  useSelectorCurrentUser,
} from "../../Hooks/current-user-hooks";
import { getTokenFromLS, setTokenToLS } from "../../Type/tokenActions";
import { getUser } from "../../Api/user-api";
import { GenericPageProps } from "./generic-page-props";

export const GenericAuthPage = memo(({ children }: GenericPageProps) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const currentUser = useSelectorCurrentUser();
  const dispatchSetCurrentUser = useDispatchSetCurrentUser();

  useEffect(() => {
    if (currentUser) return;

    const lsToken = getTokenFromLS();
    if (lsToken) {
      getUser(lsToken)
        .then((res) => {
          dispatchSetCurrentUser(res.result);
        })
        .catch((err) => console.log(err));
      return;
    }

    if (isAuthenticated) {
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
    <Box>
      <Header />
      <Box sx={{ paddingTop: 8 }}>
        {!currentUser ? <Unauthorized /> : children}
      </Box>
    </Box>
  );
});
