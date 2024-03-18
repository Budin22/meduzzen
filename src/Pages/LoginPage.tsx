import React, { FormEvent, memo, useState } from "react";
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

export const LoginPage = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const data = useAuth0();
  console.log(data);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmail = emailValidation(email);
    const isPassword = passwordValidation(password);

    if (isEmail && isPassword) console.log("send all");
    isEmail ? setIsValidEmail(true) : setIsValidEmail(false);
    isPassword ? setIsValidPassword(true) : setIsValidPassword(false);
  };

  const logOutHandler = () => {
    data.logout().then((data) => console.log(data));
  };

  const tokenHandler = async () => {
    const token = await data.getAccessTokenSilently();
    console.log(token);
    const response = await fetch("http://35.157.234.188/auth/me", {
      mode: "cors",
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": " application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
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
          variant="contained"
          onClick={tokenHandler}
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Get token
        </Button>
        <Button
          variant="contained"
          onClick={logOutHandler}
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Log out
        </Button>
        <Button
          onClick={() => data.loginWithRedirect()}
          variant="contained"
          sx={{ maxWidth: "25%" }}
        >
          Login with google
        </Button>
      </form>
    </Container>
  );
});
