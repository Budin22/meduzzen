import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { memo, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  useDispatchRemoveCurrentUser,
  useSelectorCurrentUser,
} from "../Hooks/current-user-hooks";
import { removeToken } from "../Type/token-actions";
import { useDispatchRemoveAuthToken } from "../Hooks/auth-token-hooks";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  "&.active": {
    color: theme.palette.grey["500"],
  },
  "&:hover": {
    color: theme.palette.primary.light,
  },
}));

const pages = [
  { id: 1, url: "/", name: "home" },
  { id: 2, url: "/about", name: "about" },
  { id: 3, url: "/companies", name: "companies" },
  { id: 4, url: "/users", name: "users" },
  { id: 5, url: "/auth/login", name: "login" },
  { id: 6, url: "/auth/registration", name: "registration" },
];

export const Header = memo(() => {
  const currentUser = useSelectorCurrentUser();
  const dispatchRemoveCurrentUser = useDispatchRemoveCurrentUser();
  const dispatchRemoveAuthToken = useDispatchRemoveAuthToken();
  const { logout } = useAuth0();
  const logOutHandler = useCallback(() => {
    logout();
    removeToken();
    dispatchRemoveCurrentUser();
    dispatchRemoveAuthToken();
  }, [logout, dispatchRemoveCurrentUser, dispatchRemoveAuthToken]);

  return (
    <Box sx={{ flexGrow: 1 }} position="relative">
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Budin
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {pages.map(({ id, url, name }) => (
              <StyledButton
                key={id}
                color="inherit"
                LinkComponent={NavLink}
                {...{ to: url, end: true }}
              >
                {name}
              </StyledButton>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ marginRight: 2 }}>
            {currentUser && (
              <Typography component="span">
                id: {currentUser.user_id} email: {currentUser.user_email}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            onClick={logOutHandler}
            sx={{ maxWidth: "25%", marginRight: 2 }}
          >
            Log out
          </Button>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              LinkComponent={NavLink}
              {...{ to: "/cart" }}
            >
              <StyledBadge badgeContent={1} color="error">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            {currentUser && (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                LinkComponent={NavLink}
                {...{ to: "/user/" + currentUser.user_id + "/" }}
              >
                <AccountCircle />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
