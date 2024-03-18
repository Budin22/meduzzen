import React, { FormEvent, memo, useState } from "react";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { emailValidation } from "../Util/emailValidation";
import { passwordValidation } from "../Util/passwordValidation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { passwordMatcher } from "../Util/passwordMatcher";

export const RegistrationPage = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isMatchPassword, setIsMatchPassword] = useState(true);
  const { loginWithRedirect } = useAuth0();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmail = emailValidation(email);
    const isPassword = passwordValidation(password);
    const isMatch = passwordMatcher(password, repeatPassword);

    if (isEmail && isPassword && isMatch) console.log("send all");
    isEmail ? setIsValidEmail(true) : setIsValidEmail(false);
    isPassword ? setIsValidPassword(true) : setIsValidPassword(false);
    isMatch ? setIsMatchPassword(true) : setIsMatchPassword(false);
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Registration page
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
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isValidPassword && (
              <FormHelperText id="password" error>
                At least one: lowercase letter, uppercase letter, digit, special
                character[@$!%_*?&] and 8 characters
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginBottom={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Repeat password</InputLabel>
            <Input
              type="password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            {!isMatchPassword && (
              <FormHelperText id="repeat_pasword" error>
                Password should be match
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
