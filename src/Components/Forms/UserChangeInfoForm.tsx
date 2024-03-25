import React, { FormEvent, memo, useState } from "react";
import { FormControl, Input, InputLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getUserById, updateUserInfo } from "../../Api/user-api";
import { AuthUser } from "../../Type/userTypes";
import { useDispatchSetTargetUser } from "../../Hooks/target-user-hooks";
import { useDispatchSetCurrentUser } from "../../Hooks/current-user-hooks";

export const UserChangeInfoForm = memo(
  ({
    targetUser,
    currentUser,
    token,
  }: {
    targetUser: AuthUser;
    currentUser: AuthUser;
    token: string;
  }) => {
    const {
      user_id,
      user_firstname,
      user_lastname,
      user_status,
      user_links,
      user_phone,
      user_city,
    } = targetUser;
    const dispatchSetTargetUser = useDispatchSetTargetUser();
    const dispatchSetCurrentUser = useDispatchSetCurrentUser();
    const [firstName, setFirstName] = useState(user_firstname);
    const [lastName, setLastName] = useState(user_lastname);
    const [status, setStatus] = useState(user_status);
    const [city, setCity] = useState(user_city);
    const [phone, setPhone] = useState(user_phone);
    const [links, setLinks] = useState<string[]>(user_links);

    const changeInfoHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateUserInfo(
        {
          user_city: city,
          user_lastname: lastName,
          user_links: links,
          user_phone: phone,
          user_status: status,
          user_firstname: firstName,
        },
        token,
        user_id,
      )
        .then((data) => {
          getUserById(token, data.result.user_id)
            .then((data) => {
              if (currentUser.user_id === targetUser.user_id)
                dispatchSetCurrentUser(data.result);
              dispatchSetTargetUser(data.result);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };

    return (
      <form onSubmit={changeInfoHandler}>
        <Typography variant="h6" gutterBottom color="steelblue">
          Change user info
        </Typography>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>first name</InputLabel>
            <Input
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={firstName}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>last name</InputLabel>
            <Input
              onChange={(e) => setLastName(e.target.value)}
              placeholder={lastName}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>status</InputLabel>
            <Input
              onChange={(e) => setStatus(e.target.value)}
              placeholder={status}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>City</InputLabel>
            <Input
              onChange={(e) => setCity(e.target.value)}
              placeholder={city}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Phone</InputLabel>
            <Input
              onChange={(e) => setPhone(e.target.value)}
              placeholder={phone ? phone : "+38093545882"}
            />
          </FormControl>
        </Box>
        <Box display="flex" gap={3} marginTop={2}>
          <FormControl sx={{ minWidth: "25%" }} variant="standard">
            <InputLabel>Links</InputLabel>
            <Input onChange={(e) => setLinks([])} placeholder="Links" />
          </FormControl>
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{ maxWidth: "25%", marginRight: 2 }}
        >
          Change info
        </Button>
      </form>
    );
  },
);
