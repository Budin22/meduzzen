import React, { FormEvent, memo, useState } from "react";
import {
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
import { createUser } from "../Api/user-api";
import { RegistrationUser } from "../Type/userTypes";
import { useNavigate } from "react-router-dom";
import { GenericUnauthorizedContent } from "../Components/Generic-Page/GenericUnauthorizedContent";
import { GenericPage } from "../Components/Generic-Page/GenericPage";

export const RegistrationPage = memo(() => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isMatchPassword, setIsMatchPassword] = useState(true);
  const { loginWithRedirect } = useAuth0();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmail = emailValidation(email);
    const isPassword = passwordValidation(password);
    const isMatch = passwordMatcher(password, repeatPassword);

    if (isEmail && isPassword && isMatch) {
      const user: RegistrationUser = {
        user_email: email,
        user_password: password,
        user_password_repeat: repeatPassword,
        user_firstname: firstName,
        user_lastname: lastName,
      };
      createUser(user)
        .then((data) => {
          console.log(data);
          alert("User created");
          navigation("/auth/login");
        })
        .catch((err) => {
          alert(err.response.data.detail);
          console.log(err.response.data);
        });
      return;
    }
    isEmail ? setIsValidEmail(true) : setIsValidEmail(false);
    isPassword ? setIsValidPassword(true) : setIsValidPassword(false);
    isMatch ? setIsMatchPassword(true) : setIsMatchPassword(false);
  };

  return (
    <GenericPage>
      <GenericUnauthorizedContent>
        <Typography variant="h1" gutterBottom color="steelblue">
          Hello from Registration page
        </Typography>
        <form onSubmit={submitHandler}>
          <Box display="flex" gap={3} marginTop={2}>
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
                  At least one: lowercase letter, uppercase letter, digit,
                  special character[@$!%_*?&] and 8 characters
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
          <Box display="flex" gap={3} marginBottom={2}>
            <FormControl sx={{ minWidth: "25%" }} variant="standard">
              <InputLabel>First name</InputLabel>
              <Input onChange={(e) => setFirstName(e.target.value)} />
            </FormControl>
          </Box>
          <Box display="flex" gap={3} marginBottom={2}>
            <FormControl sx={{ minWidth: "25%" }} variant="standard">
              <InputLabel>Last name</InputLabel>
              <Input onChange={(e) => setLastName(e.target.value)} />
            </FormControl>
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ maxWidth: "25%", marginRight: 2 }}
          >
            Registration with password
          </Button>
          <Button
            onClick={() => loginWithRedirect()}
            variant="contained"
            sx={{ maxWidth: "25%" }}
          >
            Registration with google
          </Button>
        </form>
      </GenericUnauthorizedContent>
    </GenericPage>
  );
});
