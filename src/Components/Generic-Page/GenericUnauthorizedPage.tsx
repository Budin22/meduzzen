import { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import { Header } from "../Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelectorCurrentUser } from "../../Hooks/user-hooks";
import { getTokenFromLS } from "../../Type/tokenActions";
import { getUser } from "../../Api/user-api";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { GenericPageProps } from "./generic-page-props";

export const GenericUnauthorizedPage = memo(
  ({ children }: GenericPageProps) => {
    const navigation = useNavigate();
    const { isAuthenticated } = useAuth0();
    const currentUser = useSelectorCurrentUser();

    useEffect(() => {
      if (currentUser || isAuthenticated) {
        navigation("/");
        return;
      }

      const lsToken = getTokenFromLS();
      if (lsToken) {
        getUser(lsToken)
          .then((res) => {
            navigation("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [isAuthenticated, currentUser, navigation]);
    return (
      <Box>
        <Header />
        <Container sx={{ paddingTop: 8 }}>{children}</Container>
      </Box>
    );
  },
);
