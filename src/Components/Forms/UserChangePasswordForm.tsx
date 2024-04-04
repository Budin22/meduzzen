import React, { FormEvent, memo, useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { passwordValidation } from "../../Util/passwordValidation";
import { passwordMatcher } from "../../Util/passwordMatcher";
import { changeUserPassword } from "../../Api/user-api";
import { useSelectorAuthToken } from "../../Hooks/auth-token-hooks";

export const UserChangePasswordForm = memo(({ id }: { id: number }) => {
  const token = useSelectorAuthToken();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isMatchPassword, setIsMatchPassword] = useState(true);

  const changePasswordHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isPassword = passwordValidation(password);
    const isMatch = passwordMatcher(password, repeatPassword);
    if (isPassword && isMatch) {
      changeUserPassword(
        { user_password: password, user_password_repeat: repeatPassword },
        token,
        id,
      )
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
    isPassword ? setIsValidPassword(true) : setIsValidPassword(false);
    isMatch ? setIsMatchPassword(true) : setIsMatchPassword(false);
  };

  return (
    <>
      <form onSubmit={changePasswordHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Change password
        </Typography>
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
          sx={{ maxWidth: "100%", marginRight: 2 }}
        >
          Change password
        </Button>
      </form>
    </>
  );
});
