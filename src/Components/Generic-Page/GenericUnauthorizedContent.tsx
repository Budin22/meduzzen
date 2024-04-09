import { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import { useAuth0 } from "@auth0/auth0-react";
import { getTokenFromLS } from "../../Type/token-actions";
import { getUser } from "../../Api/user-api";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { GenericPageProps } from "./generic-page-props";
import { tokenStore } from "../../Api/axios-instance-with-token";
import { useSelectorAuthToken } from "../../Hooks/auth-token-hooks";

export const GenericUnauthorizedContent = memo(
  ({ children }: GenericPageProps) => {
    const navigation = useNavigate();
    const { isAuthenticated } = useAuth0();
    const token = useSelectorAuthToken();

    useEffect(() => {
      if (token || isAuthenticated) {
        navigation("/users");
        return;
      }

      const lsToken = getTokenFromLS();
      if (lsToken) {
        tokenStore.setToken(lsToken);
        getUser()
          .then((res) => {
            navigation("/users");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [isAuthenticated, token, navigation]);
    return (
      <Box>
        <Container sx={{ paddingTop: 8 }}>{children}</Container>
      </Box>
    );
  },
);
