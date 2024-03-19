import React, { FormEvent, memo, useEffect, useState } from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import { emailValidation } from "../Util/emailValidation";
import { passwordValidation } from "../Util/passwordValidation";
import { loginUser } from "../Api/user-api";
import { LoginUser } from "../Type/userTypes";
import { useNavigate } from "react-router-dom";
import { setTokenToLS } from "../Type/tokenActions";
import { Header } from "../Components/Header";
import { useSelectorCurrentUser } from "../Hooks/user-hooks";

export const LoginPage = memo(() => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const { loginWithRedirect } = useAuth0();
  const currentUser = useSelectorCurrentUser();

  useEffect(() => {
    if (currentUser) {
      navigation("/");
    }
  }, [currentUser, navigation]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmail = emailValidation(email);
    const isPassword = passwordValidation(password);

    if (isEmail && isPassword) {
      const user: LoginUser = {
        user_email: email,
        user_password: password,
      };
      loginUser(user)
        .then((data) => {
          setTokenToLS(data.result.access_token);
          navigation("/about");
        })
        .catch((err) => console.log(err.response.data));
      return;
    }
    isEmail ? setIsValidEmail(true) : setIsValidEmail(false);
    isPassword ? setIsValidPassword(true) : setIsValidPassword(false);
  };

  return (
    <Container>
      <Header />
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Login page
      </Typography>
      <form onSubmit={submitHandler}>
        <Box display="flex" gap={3} marginTop={3}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Email</InputLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
            {!isValidEmail && (
              <FormHelperText id="email" error>
                not valid email
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Password</InputLabel>
            <Input onChange={(e) => setPassword(e.target.value)} />
            {!isValidPassword && (
              <FormHelperText id="password" error>
                At least one: lowercase letter, uppercase letter, digit, special
                character[@$!%_*?&] and 8 characters
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Login with password
        </Button>
        <Button
          onClick={() => loginWithRedirect()}
          variant="contained"
          sx={{ maxWidth: "25%" }}
        >
          Login with google
        </Button>
      </form>
    </Container>
  );
});
