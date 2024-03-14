import React, { memo } from "react";
import { Container, Stack, Typography } from "@mui/material";
import { useDispatchAddUser, useSelectorUser } from "../Hooks/user-hooks";
import Button from "@mui/material/Button";

export const UsersPage = memo(() => {
  const { users } = useSelectorUser();
  const dispatchAddUser = useDispatchAddUser();
  const addUser = () => {
    dispatchAddUser({
      id: users.length + 1,
      email: "mail111@sdfsdf.com",
      firstName: "1",
      lastName: "1",
    });
  };
  return (
    <Container>
      <Typography variant="h1" gutterBottom color="steelblue">
        Hello from Users page
      </Typography>
      <Button onClick={addUser}>Add user</Button>
      <Stack>
        {users?.length !== 0 &&
          users.map((u) => (
            <span key={u.id}>
              {u.id}. {u.email}
            </span>
          ))}
      </Stack>
    </Container>
  );
});
